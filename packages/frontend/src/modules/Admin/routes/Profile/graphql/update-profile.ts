import { gql, useMutation } from '@apollo/client'

import { UpdateProfileMutation, UpdateProfileMutationVariables } from '~helpers/graphql/generated'

const UPDATE_PROFILE_MUTATION = gql`
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      user {
        id
      }
    }
  }
`

export const useUpdateProfileMutation = () =>
  useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UPDATE_PROFILE_MUTATION, {
    errorPolicy: 'all',
  })
