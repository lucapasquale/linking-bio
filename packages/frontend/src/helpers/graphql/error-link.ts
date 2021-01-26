import { GraphQLError } from 'graphql'
import { fromPromise, gql, Operation } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import { config } from '~src/config'
import { createApolloClient } from './apollo-client'

export const ErrorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (!graphQLErrors || !graphQLErrors.length) {
    return
  }

  for (const gqlError of graphQLErrors) {
    if (!isUnauthorizedError(gqlError) || isRefreshTokenOperation(operation)) {
      return
    }

    return fromPromise(
      getNewTokens().catch((err) => {
        localStorage.removeItem(config.ACCESS_TOKEN_KEY)
        localStorage.removeItem(config.REFRESH_TOKEN_KEY)

        throw err
      })
    ).flatMap((accessToken) => {
      // modify the operation context with a new token
      operation.setContext({
        headers: { authorization: `Bearer ${accessToken}` },
      })

      // retry the request, returning the new observable
      return forward(operation)
    })
  }

  return
})

function isUnauthorizedError(error: GraphQLError) {
  return error && error.message === 'Unauthorized'
}

function isRefreshTokenOperation(operation: Operation) {
  return operation && operation.operationName === 'RefreshToken'
}

const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshToken($token: String!) {
    refreshToken(token: $token) {
      accessToken
      refreshToken
    }
  }
`

async function getNewTokens() {
  const existingRefreshToken = localStorage.getItem(config.REFRESH_TOKEN_KEY)
  if (!existingRefreshToken) {
    return
  }

  const client = createApolloClient()
  const { data } = await client.mutate({
    mutation: REFRESH_TOKEN_MUTATION,
    variables: { token: existingRefreshToken },
    errorPolicy: 'none',
  })

  if (!data) {
    return
  }

  const { accessToken, refreshToken } = data.refreshToken
  localStorage.setItem(config.ACCESS_TOKEN_KEY, accessToken)
  localStorage.setItem(config.REFRESH_TOKEN_KEY, refreshToken)

  return accessToken
}
