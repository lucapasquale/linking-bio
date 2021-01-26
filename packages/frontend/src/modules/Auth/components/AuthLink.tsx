import React, { FC } from 'react'
import Link from 'next/link'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  link: { alignSelf: 'flex-start', marginBottom: theme.spacing(1) },
}))

type Props = {
  title: string
  href: string
}

export const AuthLink: FC<Props> = ({ title, href }) => {
  const classes = useStyles()

  return (
    <Link passHref href={href}>
      <Button variant="text" className={classes.link}>
        {title}
      </Button>
    </Link>
  )
}
