import Link from 'next/link'
import React, { FC } from 'react'
import { AppBar, Button, Container, makeStyles, Toolbar } from '@material-ui/core'

import { Logo } from '~components/Logo'

const useStyles = makeStyles((theme) => ({
  logo: { flexGrow: 1 },
  container: { padding: 0 },
  button: { marginLeft: theme.spacing(1) },
}))

export const Header: FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Container maxWidth="md" className={classes.container}>
        <Toolbar>
          <div className={classes.logo}>
            <Link href="/">
              <a>
                <Logo singleLine variant="h5" />
              </a>
            </Link>
          </div>

          <Link passHref href="/auth/login">
            <Button variant="outlined" className={classes.button}>
              Login
            </Button>
          </Link>

          <Link passHref href="/auth/signup">
            <Button variant="contained" className={classes.button}>
              Signup
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
