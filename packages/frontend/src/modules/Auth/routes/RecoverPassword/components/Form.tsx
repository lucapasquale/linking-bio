import React, { FC, useState } from 'react'
import qs from 'querystring'
import { useForm } from 'react-hook-form'
import { IconButton, InputAdornment, makeStyles } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

import { Button } from '~components/Button'
import { InputFormItem } from '~components/InputFormItem'
import { useRecoverPassword } from '../graphql/recover-password'

const useStyles = makeStyles((theme) => ({
  button: { alignSelf: 'flex-end', marginTop: theme.spacing(2) },
}))

type FormValue = { password: string }

type Props = {
  onSuccess: (accessToken: string, refreshToken: string) => void
}

export const Form: FC<Props> = ({ onSuccess }) => {
  const classes = useStyles()

  const [recoverPassword, { loading }] = useRecoverPassword()
  const { register, handleSubmit, errors } = useForm<FormValue>()

  const [showPass, setShowPass] = useState(false)

  const onSubmit = async ({ password }: FormValue) => {
    const { slug, recoveryToken } = qs.parse(window.location.search)

    if (typeof slug !== 'string' || typeof recoveryToken !== 'string') {
      window.location.href = '/auth/login'
      return
    }

    const { data } = await recoverPassword({
      variables: { input: { newPassword: password, slug, recoveryToken } },
    })

    if (data) {
      onSuccess(data.recoverPassword.accessToken, data.recoverPassword.refreshToken)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFormItem
        field="password"
        label="New password"
        type={showPass ? 'text' : 'password'}
        errorMessage={errors.password?.message}
        inputRef={register({ required: 'Password is required' })}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPass(!showPass)}
                onMouseDown={(e) => e.preventDefault()}
              >
                {showPass ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        color="secondary"
        type="submit"
        loading={loading}
        className={classes.button}
      >
        Update password
      </Button>
    </form>
  )
}
