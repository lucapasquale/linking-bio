import React from 'react'
import Router from 'next/router'

import { userPageQuery } from '~Admin/graphql/user-page'
import { PageContainer } from '~Admin/components/PageContainer'
import { LoadingContent } from '~Admin/components/LoadingContent'

import { Form } from '~Admin/routes/Password/components/Form'

export default function Page() {
  const { loading, data } = userPageQuery()
  if (!data || loading) {
    return (
      <PageContainer title="Change password">
        <LoadingContent />
      </PageContainer>
    )
  }

  if (!data.user) {
    Router.push('/')
    return null
  }

  const onSuccess = async () => {
    Router.push('/admin')
  }

  return (
    <PageContainer title="Change password">
      <Form onSuccess={onSuccess} />
    </PageContainer>
  )
}
