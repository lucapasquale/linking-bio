import React from 'react'
import Head from 'next/head'

import { Header } from '~Home/components/Header'
import { Sections } from '~Home/components/Sections'
import { Footer } from '~Home/components/Footer'

export default function Page() {
  return (
    <>
      <Head>
        <title>Linking Bio</title>
        <link rel="canonical" href="https://www.linkingbio.com" />
        <meta
          name="description"
          content="Create and share your personalized pages, and share your favorite links with everyone"
        />
      </Head>

      <Header />

      <Sections />

      <Footer />
    </>
  )
}
