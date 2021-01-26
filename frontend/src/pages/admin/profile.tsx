import React from 'react'
import Router from 'next/router'

import { userPageQuery } from '~Admin/graphql/user-page'
import { PageContainer } from '~Admin/components/PageContainer'
import { LoadingContent } from '~Admin/components/LoadingContent'

import { Form } from '~Admin/routes/Profile/components/Form'

export default function Page() {
  const { loading, data, refetch } = userPageQuery()
  if (!data || loading) {
    return (
      <PageContainer title="Edit Profile">
        <LoadingContent />
      </PageContainer>
    )
  }

  if (!data.user) {
    Router.push('/')
    return null
  }

  const onSuccess = async () => {
    await refetch()
    Router.push('/admin')
  }

  return (
    <PageContainer title="Edit Profile">
      <Form owner={data.user.page.owner} onSuccess={onSuccess} />
    </PageContainer>
  )
}
