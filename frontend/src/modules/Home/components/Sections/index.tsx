import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core'

import { Hero } from './Hero'
import { Features } from './Features'

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(6),

    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
}))

export const Sections: FC = () => {
  const classes = useStyles()

  return (
    <main>
      <section id="hero" className={classes.section}>
        <Hero />
      </section>

      <section id="features" className={classes.section}>
        <Features />
      </section>
    </main>
  )
}
