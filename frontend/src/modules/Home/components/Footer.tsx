import React, { FC } from 'react'
import Link from 'next/link'

import { Logo } from '~components/Logo'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  logoLink: { marginBottom: theme.spacing(4) },
  button: { marginLeft: theme.spacing(1), marginBottom: theme.spacing(2) },
}))

export const Footer: FC = () => {
  const classes = useStyles()

  return (
    <footer className={classes.wrapper}>
      <Link href="/">
        <a className={classes.logoLink}>
          <Logo singleLine variant="h5" />
        </a>
      </Link>

      <Link passHref href="/privacy-policy">
        <Button variant="text" className={classes.button}>
          Privacy Policy
        </Button>
      </Link>
    </footer>
  )
}
