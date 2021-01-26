import { gql, useMutation } from '@apollo/client'

import { AddLinkMutation, AddLinkMutationVariables } from '~helpers/graphql/generated'

const ADD_LINK_MUTATION = gql`
  mutation AddLink($input: AddLinkInput!) {
    addLink(input: $input) {
      link {
        id
        url
        title
      }
      page {
        slug
      }
    }
  }
`

export const addLinkMutation = () =>
  useMutation<AddLinkMutation, AddLinkMutationVariables>(ADD_LINK_MUTATION, {
    errorPolicy: 'all',
  })
