import React, { FC } from 'react'
import normalizeUrl from 'normalize-url'
import { makeStyles, Typography } from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons'

import { Link } from '~helpers/graphql/generated'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '64px',
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 4),
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
  },
  backWrapper: { display: 'flex', alignItems: 'center' },
}))

type Props = {
  link: Link
}

export const UserLink: FC<Props> = ({ link }) => {
  const classes = useStyles()

  return (
    <a target="_blank" rel="noreferrer" href={normalizeUrl(link.url)} className={classes.wrapper}>
      <Typography variant="subtitle1">{link.title}</Typography>
      <ChevronRight />
    </a>
  )
}
