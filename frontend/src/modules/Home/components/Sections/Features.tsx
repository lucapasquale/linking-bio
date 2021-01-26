import Link from 'next/link'
import Image from 'next/image'
import React, { FC } from 'react'
import { Button, Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 4),
    display: 'grid',
    alignItems: 'center',
    columnGap: theme.spacing(8),
    gridTemplateColumns: '300px 1fr',

    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
      padding: theme.spacing(6, 2, 2),
      textAlign: 'center',
    },
  },
  examplePages: {
    margin: 'auto',
    maxWidth: '324px',
    overflow: 'hidden',
    borderRadius: '50px',
    border: 'black solid 12px',

    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(4),
    },
  },
  article: { marginBottom: theme.spacing(5) },
}))

export const Features: FC = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="md" className={classes.container}>
      <div className={classes.examplePages}>
        <Image src="/images/example-pages.gif" alt="Example pages" width={300} height={650} />
      </div>

      <div>
        <article className={classes.article}>
          <Typography variant="subtitle1">One page, multiple places</Typography>

          <Typography variant="body1">
            Share your latest trip pictures, your personal website, or a promotion that the people
            you know will love
          </Typography>
        </article>

        <article className={classes.article}>
          <Typography variant="subtitle1">Make it personal</Typography>

          <Typography variant="body1">
            Add new links, change your profile picture ou try a different theme, all to keep it just
            like you want it
          </Typography>
        </article>

        <article className={classes.article}>
          <Typography variant="subtitle1">Share your socials</Typography>

          <Typography variant="body1">
            Share all your social media profiles with your audience, and engage everywhere
          </Typography>
        </article>

        <Link passHref href="/auth/signup">
          <Button fullWidth variant="contained" color="secondary">
            Create your own
          </Button>
        </Link>
      </div>
    </Container>
  )
}
