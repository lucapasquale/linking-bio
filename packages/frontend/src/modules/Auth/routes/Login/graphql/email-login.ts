import { gql, useMutation } from '@apollo/client'

import { EmailLoginMutation, EmailLoginMutationVariables } from '~helpers/graphql/generated'

const LOGIN_MUTATION = gql`
  mutation EmailLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`

export const useEmailLoginMutation = () =>
  useMutation<EmailLoginMutation, EmailLoginMutationVariables>(LOGIN_MUTATION)
