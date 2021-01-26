import React, { FC } from 'react'
import { CircularProgress, makeStyles, Button as MUIButton, ButtonProps } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  loading: { marginLeft: theme.spacing(1) },
}))

type Props = ButtonProps & {
  loading?: boolean
}

export const Button: FC<Props> = ({ loading = false, children, ...props }) => {
  const classes = useStyles()

  return (
    <MUIButton disabled={props.disabled || loading} {...props}>
      {children}
      {loading && <CircularProgress color="inherit" size={16} className={classes.loading} />}
    </MUIButton>
  )
}
