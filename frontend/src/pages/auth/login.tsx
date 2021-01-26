import React, { useEffect } from 'react'

import { config } from '~src/config'
import { userPageQuery } from '~Admin/graphql/user-page'

import { AuthWrapper } from '~Auth/components/AuthWrapper'
import { Form } from '~Auth/routes/Login/components/Form'

export default function Page() {
  const { data, loading, error } = userPageQuery()

  useEffect(() => {
    if (loading) {
      return
    }

    if (!error && data?.user.id) {
      window.location.href = '/admin'
    }
  }, [loading, data, error])

  const onSuccess = (accessToken: string, refreshToken: string) => {
    localStorage.setItem(config.ACCESS_TOKEN_KEY, accessToken)
    localStorage.setItem(config.REFRESH_TOKEN_KEY, refreshToken)

    window.location.href = '/admin'
  }

  return (
    <AuthWrapper title="LOGIN">
      <Form onSuccess={onSuccess} />
    </AuthWrapper>
  )
}
