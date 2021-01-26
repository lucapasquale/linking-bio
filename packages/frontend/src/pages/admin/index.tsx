import React from 'react'

import { PageContainer } from '~Admin/components/PageContainer'
import { AdminHome } from '~Admin/routes/Home'

export default function Page() {
  return (
    <PageContainer showBack={false} title="My Bio">
      <AdminHome />
    </PageContainer>
  )
}
