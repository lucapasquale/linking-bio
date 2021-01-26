import React, { useState, useEffect } from 'react'
import qs from 'query-string'
import { Typography } from '@material-ui/core'

import { AuthWrapper } from '~Auth/components/AuthWrapper'
import { Form } from '~Auth/routes/ForgotPassword/components/Form'
import { AuthLink } from '~Auth/components/AuthLink'

export default function Page() {
  const [sent, setSent] = useState(false)

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

  if (sent) {
    return (
      <AuthWrapper title="EMAIL SENT">
        <AuthLink title="Back to login" href="/auth/login" />
      </AuthWrapper>
    )
  }

  return (
    <AuthWrapper title="FORGOT PASSWORD">
      <Typography variant="body1">
        If your email is registered, we’ll send you an email with how you can recover your password
      </Typography>

      <Form initialEmail={email} onSuccess={() => setSent(true)} />

      <AuthLink title="Back to login" href="/auth/login" />
    </AuthWrapper>
  )
}
