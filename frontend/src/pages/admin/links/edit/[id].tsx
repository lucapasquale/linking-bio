import React from 'react'
import { useRouter } from 'next/router'

import { PageContainer } from '~Admin/components/PageContainer'
import { EditLink } from '~Admin/routes/Links/Edit'

export default function Page() {
  const router = useRouter()

  if (!router.query.id || typeof router.query.id !== 'string') {
    return <div>error</div>
  }

  return (
    <PageContainer title="Edit Link">
      <EditLink linkId={router.query.id} />
    </PageContainer>
  )
}
