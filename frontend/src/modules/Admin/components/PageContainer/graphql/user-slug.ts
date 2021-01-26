import { gql, useQuery } from '@apollo/client'

import { UserSlugQuery } from '~helpers/graphql/generated'

const QUERY = gql`
  query UserSlug {
    user {
      id
      page {
        slug
      }
    }
  }
`

export const userSlugQuery = () => useQuery<UserSlugQuery>(QUERY)
