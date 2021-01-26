import Link from 'next/link'
import Image from 'next/image'
import React, { FC } from 'react'
import { Button, Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 2),
    display: 'grid',
    alignItems: 'center',
    columnGap: theme.spacing(4),
    gridTemplateColumns: '1fr 1fr',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(6, 2, 2),
      textAlign: 'center',
    },
  },
  accent: { fontWeight: 'bold', color: theme.palette.secondary.main },
  description: { margin: theme.spacing(3, 0) },
  illustration: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  backgroundSvg: { position: 'absolute', transform: 'translate(52px, -60px)' },
}))

export const Hero: FC = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="md" className={classes.container}>
      <div>
        <Typography variant="h3">
          Your last bio - <span className={classes.accent}>ever</span>
        </Typography>

        <Typography variant="body1" className={classes.description}>
          Create a page, add your links, and never change your social media bio again
        </Typography>

        <Link passHref href="/auth/signup">
          <Button fullWidth variant="contained" color="secondary">
            Create your page
          </Button>
        </Link>
      </div>

      <div className={classes.illustration}>
        <div className={classes.backgroundSvg}>
          <Image
            src="/svgs/landing-humans-background.svg"
            alt="Polygons background"
            width={460}
            height={800}
          />
        </div>

        <Image src="/svgs/landing-humans.svg" alt="Humans viewing phone" width={480} height={600} />
      </div>
    </Container>
  )
}
