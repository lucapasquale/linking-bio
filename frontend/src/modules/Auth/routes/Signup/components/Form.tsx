import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IconButton, InputAdornment, makeStyles } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

import { Button } from '~components/Button'
import { InputFormItem } from '~components/InputFormItem'
import { EmailSignupMutationVariables } from '~helpers/graphql/generated'

import { useEmailSignupMutation } from '../graphql/email-signup'

const useStyles = makeStyles((theme) => ({
  button: { alignSelf: 'flex-end', marginTop: theme.spacing(2) },
}))

type FormValue = EmailSignupMutationVariables['input']

type Props = {
  initialEmail?: string
  onSuccess: (accessToken: string, refreshToken: string) => void
}

export const Form: FC<Props> = ({ initialEmail, onSuccess }) => {
  const classes = useStyles()

  const [showPass, setShowPass] = useState(false)
  const [signupMutation, { loading }] = useEmailSignupMutation()

  const { register, handleSubmit, errors, setError } = useForm<FormValue>({
    defaultValues: { email: initialEmail },
  })

  const signup = async (input: FormValue) => {
    try {
      const { data } = await signupMutation({ variables: { input } })

      if (data) {
        onSuccess(data.signup.accessToken, data.signup.refreshToken)
      }
    } catch (e) {
      if (e.message === 'Slug already used') {
        setError('slug', { type: 'invalid', message: 'Username already in use!' })
      }

      if (e.message === 'Email already used') {
        setError('email', { type: 'invalid', message: 'Email already in use!' })
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(signup)}>
      <InputFormItem
        field="name"
        label="Name"
        errorMessage={errors.name?.message}
        inputRef={register({ required: 'Name is required' })}
      />

      <InputFormItem
        field="slug"
        label="Username"
        errorMessage={errors.slug?.message}
        inputRef={register({ required: 'Username is required' })}
      />

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
        Signup
      </Button>
    </form>
  )
}
