import { gql, useMutation } from '@apollo/client'

import { ChangePasswordMutation, ChangePasswordMutationVariables } from '~helpers/graphql/generated'

const CHANGE_PASSWORD_MUTATION = gql`
  mutation ChangePassword($password: String!) {
    changePassword(password: $password) {
      success
    }
  }
`

export const useChangePasswordMutation = () =>
  useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(CHANGE_PASSWORD_MUTATION, {
    errorPolicy: 'all',
  })
