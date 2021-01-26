import React, { FC } from 'react'
import { Container, makeStyles } from '@material-ui/core'

import { UserHeader } from '~components/UserHeader'

import { Page } from './graphql/use-page'
import { Footer } from './components/Footer'
import { UserLink } from './components/UserLink'

const useStyles = makeStyles((theme) => ({
  background: { backgroundColor: theme.palette.background.default },
  container: { padding: 0, height: '100vh' },
}))

type Props = {
  page: Page
}

export const Bio: FC<Props> = ({ page }) => {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <Container maxWidth="sm" className={classes.container}>
        <UserHeader page={page} />

        <main>
          {page.links.map((link) => (
            <UserLink key={link.id} link={link} />
          ))}
        </main>

        <Footer />
      </Container>
    </div>
  )
}
