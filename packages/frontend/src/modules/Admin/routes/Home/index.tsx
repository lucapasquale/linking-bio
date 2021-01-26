import React, { FC } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Fab, makeStyles } from '@material-ui/core'
import { Add } from '@material-ui/icons'

import { UserHeader } from '~components/UserHeader'

import { userPageQuery } from '~Admin/graphql/user-page'
import { LoadingContent } from '~Admin/components/LoadingContent'
import { SortableLinks } from '~Admin/routes/Home/components/SortableLinks'

const useStyles = makeStyles((theme) => ({
  section: { paddingBottom: theme.spacing(2) },
  addLinkButton: { alignSelf: 'flex-end' },
}))

export const AdminHome: FC = () => {
  const classes = useStyles()
  const { loading, data, error } = userPageQuery()

  if (error) {
    Router.push('/')
    return null
  }

  if (loading) {
    return <LoadingContent />
  }

  if (!data || !data.user) {
    Router.push('/')
    return null
  }

  return (
    <>
      <UserHeader page={data.user.page} />

      <section className={classes.section}>
        <SortableLinks page={data.user.page} />
      </section>

      <Link passHref href="/admin/links/create">
        <Fab color="secondary" size="medium" className={classes.addLinkButton}>
          <Add />
        </Fab>
      </Link>
    </>
  )
}
