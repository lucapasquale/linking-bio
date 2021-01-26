import React from 'react'
import Router from 'next/router'

import { userPageQuery } from '~Admin/graphql/user-page'
import { PageContainer } from '~Admin/components/PageContainer'
import { LoadingContent } from '~Admin/components/LoadingContent'

import { ThemeSelection } from '~Admin/routes/Theme/ThemeSelection'

export default function Page() {
  const { loading, data, refetch } = userPageQuery()
  if (!data || loading) {
    return (
      <PageContainer title="Customize Theme">
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
    <PageContainer title="Customize Theme">
      <ThemeSelection initialValue={data.user.page.theme} onSuccess={onSuccess} />
    </PageContainer>
  )
}
