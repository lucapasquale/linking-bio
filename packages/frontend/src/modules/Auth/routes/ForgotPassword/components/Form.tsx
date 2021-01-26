import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core'

import { Button } from '~components/Button'
import { InputFormItem } from '~components/InputFormItem'

import { useForgotPassword } from '../graphql/forgot-password'

const useStyles = makeStyles((theme) => ({
  button: { alignSelf: 'flex-end', marginTop: theme.spacing(2) },
}))

type Props = {
  initialEmail?: string
  onSuccess: () => any | Promise<any>
}

export const Form: FC<Props> = ({ initialEmail, onSuccess }) => {
  const classes = useStyles()
  const [forgotPassword, { loading }] = useForgotPassword()

  const { register, handleSubmit, errors } = useForm<{ email: string }>({
    defaultValues: { email: initialEmail },
  })

  const onSubmit = async ({ email }: { email: string }) => {
    const { data } = await forgotPassword({ variables: { email } })

    if (data && data.forgotPassword.success) {
      onSuccess()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFormItem
        field="email"
        label="Email"
        autoComplete="on"
        type="email"
        errorMessage={errors.email?.message}
        inputRef={register({ required: 'Email is required' })}
      />

      <Button
        variant="contained"
        color="secondary"
        type="submit"
        loading={loading}
        className={classes.button}
      >
        Send email
      </Button>
    </form>
  )
}
