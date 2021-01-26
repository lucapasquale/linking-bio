import React, { FC } from 'react'
import { CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  wrapper: { display: 'flex', justifyContent: 'center' },
}))

export const LoadingContent: FC = ({}) => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <CircularProgress color="secondary" />
    </div>
  )
}
