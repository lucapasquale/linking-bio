import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IconButton, InputAdornment, makeStyles } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

import { Button } from '~components/Button'
import { InputFormItem } from '~components/InputFormItem'
import { ChangePasswordMutationVariables } from '~helpers/graphql/generated'

import { useChangePasswordMutation } from '../graphql/change-password'

const useStyles = makeStyles((theme) => ({
  button: { alignSelf: 'flex-end', marginTop: theme.spacing(2) },
}))

type Props = {
  onSuccess?: () => any | Promise<any>
}

export const Form: FC<Props> = ({ onSuccess }) => {
  const classes = useStyles()
  const [showPass, setShowPass] = useState(false)

  const [changePassword, { loading }] = useChangePasswordMutation()
  const { register, handleSubmit, errors } = useForm<ChangePasswordMutationVariables>()

  const onSubmit = async ({ password }: ChangePasswordMutationVariables) => {
    await changePassword({ variables: { password } })
    onSuccess && (await onSuccess())
  }

  return (
    <form id="change-password-form" onSubmit={handleSubmit(onSubmit)}>
      <InputFormItem
        field="password"
        label="New password"
        type={showPass ? 'text' : 'password'}
        errorMessage={errors.password?.message}
        inputRef={register({
          required: 'Password is required',
          minLength: { value: 6, message: 'Minimum of 6 digits' },
        })}
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
        Save
      </Button>
    </form>
  )
}
