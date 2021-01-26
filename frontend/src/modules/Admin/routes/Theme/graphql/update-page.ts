import { gql, useMutation } from '@apollo/client'

import { UpdatePageMutation, UpdatePageMutationVariables } from '~helpers/graphql/generated'

const UPDATE_PAGE_MUTATION = gql`
  mutation UpdatePage($input: UpdatePageInput!) {
    updatePage(input: $input) {
      page {
        slug
        theme
      }
    }
  }
`

export const useUpdatePageMutation = () =>
  useMutation<UpdatePageMutation, UpdatePageMutationVariables>(UPDATE_PAGE_MUTATION)
