import { gql, useMutation } from '@apollo/client'

import { SortLinksMutationVariables, SortLinksMutation } from '~helpers/graphql/generated'

const MUTATION = gql`
  mutation SortLinks($linkIds: [Int!]!) {
    sortLinks(linkIds: $linkIds) {
      page {
        links {
          id
          title
          sortOrder
        }
      }
    }
  }
`

export const sortLinksMutation = () =>
  useMutation<SortLinksMutation, SortLinksMutationVariables>(MUTATION, {
    errorPolicy: 'all',
  })
