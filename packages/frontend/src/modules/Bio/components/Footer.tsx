import React, { FC } from 'react'
import Link from 'next/link'

import { Logo } from '~components/Logo'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    padding: theme.spacing(1, 2),
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1, 1, 0, 0),
  },
}))

export const Footer: FC = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Link passHref href="/">
        <a className={classes.content}>
          <Logo singleLine variant="body2" />
        </a>
      </Link>
    </footer>
  )
}
