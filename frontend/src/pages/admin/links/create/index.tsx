import React from 'react'

import { PageContainer } from '~Admin/components/PageContainer'
import { CreateLink } from '~Admin/routes/Links/Create'

export default function Page() {
  return (
    <PageContainer title="Create Link">
      <CreateLink />
    </PageContainer>
  )
}
