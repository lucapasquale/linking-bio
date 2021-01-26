import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputAdornment, IconButton, makeStyles } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

import { Button } from '~components/Button'
import { InputFormItem } from '~components/InputFormItem'
import { EmailLoginMutationVariables } from '~helpers/graphql/generated'

import { useEmailLoginMutation } from '../graphql/email-login'
import { AuthLink } from '../../../components/AuthLink'

const useStyles = makeStyles((theme) => ({
  button: { alignSelf: 'flex-end', marginTop: theme.spacing(2) },
}))

type Props = {
  onSuccess: (accessToken: string, refreshToken: string) => void
}

export const Form: FC<Props> = ({ onSuccess }) => {
  const classes = useStyles()
  const [loginMutation, { loading }] = useEmailLoginMutation()

  const [showPass, setShowPass] = useState(false)
  const { register, handleSubmit, watch, errors, setError } = useForm<EmailLoginMutationVariables>()

  const emailQueryString = watch('email') ? `?email=${watch('email')}` : ''

  const login = async (variables: EmailLoginMutationVariables) => {
    try {
      const { data } = await loginMutation({ variables })

      if (data) {
        onSuccess(data.login.accessToken, data.login.refreshToken)
      }
    } catch (e) {
      setError('password', { type: 'invalid', message: 'Please check your email and password!' })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(login)}>
        <InputFormItem
          field="email"
          label="Email"
          autoComplete="on"
          type="email"
          errorMessage={errors.email?.message}
          inputRef={register({ required: 'Email is required' })}
        />

        <InputFormItem
          field="password"
          label="Password"
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
          Login
        </Button>
      </form>

      <AuthLink title="Forgot your password?" href={`/auth/forgot-password${emailQueryString}`} />
      <AuthLink title="Create account" href={`/auth/signup${emailQueryString}`} />
    </>
  )
}
