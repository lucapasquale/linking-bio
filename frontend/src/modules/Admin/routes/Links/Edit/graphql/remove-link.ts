import { gql, useMutation } from '@apollo/client'

import { RemoveLinkMutation, RemoveLinkMutationVariables } from '~helpers/graphql/generated'

const REMOVE_LINK_MUTATION = gql`
  mutation RemoveLink($linkId: ID!) {
    removeLink(linkId: $linkId) {
      link {
        id
      }
      page {
        slug
      }
    }
  }
`

export const removeLinkMutation = () =>
  useMutation<RemoveLinkMutation, RemoveLinkMutationVariables>(REMOVE_LINK_MUTATION, {
    errorPolicy: 'all',
  })
