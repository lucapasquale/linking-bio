import { useEffect } from 'react'
import Router from 'next/router'

import { config } from '~src/config'
import { useApollo } from '~helpers/graphql/apollo-client'

export default function Page() {
  const apolloClient = useApollo()

  useEffect(() => {
    localStorage.removeItem(config.ACCESS_TOKEN_KEY)
    localStorage.removeItem(config.REFRESH_TOKEN_KEY)

    apolloClient.resetStore().then(() => {
      Router.push('/')
    })
  }, [])

  return null
}
