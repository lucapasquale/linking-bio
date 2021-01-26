import { gql, useMutation } from '@apollo/client'

import {
  RecoverPasswordMutationVariables,
  RecoverPasswordMutation,
} from '~helpers/graphql/generated'

const RECOVER_PASSWORD = gql`
  mutation RecoverPassword($input: RecoverPasswordInput!) {
    recoverPassword(input: $input) {
      accessToken
      refreshToken
    }
  }
`

export const useRecoverPassword = () =>
  useMutation<RecoverPasswordMutation, RecoverPasswordMutationVariables>(RECOVER_PASSWORD, {
    errorPolicy: 'all',
  })
