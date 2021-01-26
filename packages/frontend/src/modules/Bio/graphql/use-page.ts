import { gql, useQuery } from '@apollo/client'

import { GetPageQueryVariables, GetPageQuery } from '~helpers/graphql/generated'

const QUERY = gql`
  query getPage($slug: String!) {
    page(slug: $slug) {
      slug
      theme
      owner {
        name
        avatarUrl
        social {
          kind
          username
          url
        }
      }
      links {
        id
        url
        title
        sortOrder
      }
    }
  }
`

export type Page = NonNullable<GetPageQuery['page']>

export const usePageQuery = (variables: GetPageQueryVariables) =>
  useQuery<GetPageQuery>(QUERY, { variables, skip: !variables.slug })
