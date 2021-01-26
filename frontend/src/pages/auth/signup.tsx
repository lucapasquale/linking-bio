import React, { useState, useEffect } from 'react'
import qs from 'query-string'

import { config } from '~src/config'

import { AuthWrapper } from '~Auth/components/AuthWrapper'
import { Form } from '~Auth/routes/Signup/components/Form'
import { AuthLink } from '~Auth/components/AuthLink'

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    const queryString = qs.parse(window.location.search)
    if (queryString.email) {
      setEmail(queryString.email as string)
    }

    setLoading(false)
  }, [])

  if (loading) {
    return null
  }

  const onSuccess = (accessToken: string, refreshToken: string) => {
    localStorage.setItem(config.ACCESS_TOKEN_KEY, accessToken)
    localStorage.setItem(config.REFRESH_TOKEN_KEY, refreshToken)

    window.location.href = '/admin'
  }

  return (
    <AuthWrapper title="SIGNUP">
      <Form initialEmail={email} onSuccess={onSuccess} />

      <AuthLink title="Back to login" href="/auth/login" />
    </AuthWrapper>
  )
}
