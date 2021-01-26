import {
  ApolloClient,
  InMemoryCache,
  defaultDataIdFromObject,
  from,
  HttpLink,
  NormalizedCacheObject,
} from '@apollo/client'
import { useMemo } from 'react'
import { NextPageContext } from 'next'

import { config } from '~src/config'

import { AuthLink } from './auth-link'
import { ErrorLink } from './error-link'

let apolloClient: ApolloClient<NormalizedCacheObject>

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}

export function createApolloClient(_?: any, __?: NextPageContext) {
  const link = from([
    AuthLink as any,
    ErrorLink,
    new HttpLink({ uri: `${config.API_URL}/graphql` }),
  ])

  const cache = new InMemoryCache({
    addTypename: false,
    dataIdFromObject: (obj: any) => {
      switch (obj.__typename) {
        case 'Page':
          return obj.slug
        default:
          return defaultDataIdFromObject(obj)
      }
    },
  })

  return new ApolloClient({ cache, link })
}

function initializeApollo(initialState = {}) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}
