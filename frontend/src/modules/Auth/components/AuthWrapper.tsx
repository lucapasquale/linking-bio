import React, { FC } from 'react'
import Link from 'next/link'

import { Logo } from '~components/Logo'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  header: { display: 'flex', justifyContent: 'center', margin: theme.spacing(8, 0) },
  background: {
    width: 'fill-available',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.main,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    margin: 'auto',
    maxWidth: '600px',
    padding: theme.spacing(4),
  },
  title: { fontWeight: 'bold', marginBottom: theme.spacing(2) },
}))

type Props = {
  title: string
}

export const AuthWrapper: FC<Props> = ({ title, children }) => {
  const classes = useStyles()

  return (
    <>
      <header className={classes.header}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </header>

      <main className={classes.background}>
        <div className={classes.wrapper}>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>

          {children}
        </div>
      </main>
    </>
  )
}
