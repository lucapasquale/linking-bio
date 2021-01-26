import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { CustomTheme } from '~components/CustomTheme'

import { usePageQuery } from '~Bio/graphql/use-page'
import { Bio } from '~Bio/index'

export default function Page() {
  const router = useRouter()

  const { loading, data } = usePageQuery({ slug: router.query.slug as string })
  if (loading || !data) {
    return null
  }

  if (!data.page) {
    return <div>Page not found</div>
  }

  return (
    <>
      <Head>
        <title>{data.page.owner.name} | Linking Bio</title>
        <meta name="description" content={`List of links from ${data.page.owner.name}`} />
        <link rel="canonical" href={`https://www.linkingbio.com/${data.page.slug}`} />
      </Head>

      <CustomTheme pageTheme={data.page.theme}>
        <Bio page={data.page} />
      </CustomTheme>
    </>
  )
}
