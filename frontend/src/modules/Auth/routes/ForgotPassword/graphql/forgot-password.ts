import { gql, useMutation } from '@apollo/client'

import { ForgotPasswordMutation, ForgotPasswordMutationVariables } from '~helpers/graphql/generated'

const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      success
    }
  }
`

export const useForgotPassword = () =>
  useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(FORGOT_PASSWORD, {
    errorPolicy: 'all',
  })
