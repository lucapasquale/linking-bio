import { gql, useQuery } from '@apollo/client'

import { UserPageQuery } from '~helpers/graphql/generated'

export const UserPageGQL = gql`
  query UserPage {
    user {
      id
      page {
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
  }
`

export type User = UserPageQuery['user']

export const userPageQuery = () => useQuery<UserPageQuery>(UserPageGQL)
