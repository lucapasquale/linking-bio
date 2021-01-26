import { gql, useMutation } from '@apollo/client'

import { EmailSignupMutation, EmailSignupMutationVariables } from '~helpers/graphql/generated'

const SIGNUP_MUTATION = gql`
  mutation EmailSignup($input: SignupInput!) {
    signup(input: $input) {
      accessToken
      refreshToken
    }
  }
`

export const useEmailSignupMutation = () =>
  useMutation<EmailSignupMutation, EmailSignupMutationVariables>(SIGNUP_MUTATION)
