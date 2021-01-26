import React, { FC } from 'react'
import Head from 'next/head'
import { Box, Container, makeStyles } from '@material-ui/core'

import { userSlugQuery } from './graphql/user-slug'
import { Header } from './Header'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      minHeight: '100vh',
      boxShadow: '12px 0 8px -4px rgba(0, 0, 0, 0.2), -12px 0 8px -4px rgba(0, 0, 0, 0.2)',
    },
  },
  main: { display: 'flex', flexDirection: 'column', padding: theme.spacing(4, 2) },
}))

type Props = {
  title: string
  showBack?: boolean
}

export const PageContainer: FC<Props> = ({ title, children, showBack = true }) => {
  const classes = useStyles()
  const { data } = userSlugQuery()

  return (
    <>
      <Head>
        <title>Linking Bio - Admin</title>
      </Head>

      <Container maxWidth="sm" className={classes.container}>
        <Header showBack={showBack} title={title} userSlug={data?.user?.page.slug || null} />

        <Box component="main" className={classes.main}>
          {children}
        </Box>
      </Container>
    </>
  )
}
