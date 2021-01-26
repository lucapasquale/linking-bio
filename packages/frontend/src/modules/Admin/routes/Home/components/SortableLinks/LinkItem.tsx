import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { makeStyles, Paper, Typography, IconButton } from '@material-ui/core'
import { DragIndicator, Edit } from '@material-ui/icons'

import { Link } from '~helpers/graphql/generated'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(1),
  },
  leftContent: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  drag: { marginRight: theme.spacing(1), marginTop: -2 },
}))

type Props = {
  link: Link
}

export const LinkItem: FC<Props> = ({ link }) => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Paper className={classes.wrapper} draggable={false}>
      <div className={classes.leftContent}>
        <div className="dragable">
          <DragIndicator className={classes.drag} />
        </div>

        <Typography>{link.title}</Typography>
      </div>

      <IconButton onClick={() => router.push('/admin/links/edit/' + link.id)}>
        <Edit />
      </IconButton>
    </Paper>
  )
}
