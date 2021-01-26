import { setContext } from '@apollo/link-context'

import { config } from '~src/config'

export const AuthLink = setContext(() => {
  const token = localStorage.getItem(config.ACCESS_TOKEN_KEY)
  if (!token) {
    return
  }

  return {
    headers: { Authorization: `Bearer ${token}` },
  }
})
