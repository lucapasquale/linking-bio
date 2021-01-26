import React, { FC } from 'react'
import { makeStyles, TextField, TextFieldProps } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  input: { margin: theme.spacing(1, 0) },
}))

type Props = TextFieldProps & {
  field: string
  label: string
  errorMessage?: string
}

export const InputFormItem: FC<Props> = ({ field, errorMessage, ...props }) => {
  const classes = useStyles()

  return (
    <TextField
      id={field}
      name={field}
      variant="filled"
      color="secondary"
      className={classes.input}
      error={!!errorMessage}
      helperText={errorMessage}
      {...props}
    />
  )
}
