import React from 'react'

import { config } from '~src/config'

import { AuthWrapper } from '~Auth/components/AuthWrapper'
import { Form } from '~Auth/routes/RecoverPassword/components/Form'

export default function Page() {
  const onSuccess = (accessToken: string, refreshToken: string) => {
    localStorage.setItem(config.ACCESS_TOKEN_KEY, accessToken)
    localStorage.setItem(config.REFRESH_TOKEN_KEY, refreshToken)

    window.location.href = '/admin'
  }

  return (
    <AuthWrapper title="RECOVER PASSWORD">
      <Form onSuccess={onSuccess} />
    </AuthWrapper>
  )
}
