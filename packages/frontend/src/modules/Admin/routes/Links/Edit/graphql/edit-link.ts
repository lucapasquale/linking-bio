import { gql, useMutation } from '@apollo/client'

import { EditLinkMutation, EditLinkMutationVariables } from '~helpers/graphql/generated'

const EDIT_LINK_MUTATION = gql`
  mutation EditLink($input: EditLinkInput!) {
    editLink(input: $input) {
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

export const editLinkMutation = () =>
  useMutation<EditLinkMutation, EditLinkMutationVariables>(EDIT_LINK_MUTATION, {
    errorPolicy: 'all',
  })
