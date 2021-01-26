import React, { FC, useState } from 'react'
import { makeStyles } from '@material-ui/core'

import { Owner, UpdateProfileSocialsInput } from '~helpers/graphql/generated'
import { InputFormItem } from '~components/InputFormItem'
import { Button } from '~components/Button'

import { useUpdateProfileMutation } from '../graphql/update-profile'
import { getSocialInitialValue } from './SocialForm/logic'
import { ImageUploader } from './ImageUploader'
import { SocialForm } from './SocialForm'

const useStyles = makeStyles((theme) => ({
  button: { alignSelf: 'flex-end', marginTop: theme.spacing(2) },
  name: { marginTop: theme.spacing(4) },
}))

type Props = {
  owner: Owner
  onSuccess: () => Promise<any>
}

export const Form: FC<Props> = ({ owner, onSuccess }) => {
  const classes = useStyles()

  const [updateProfile, { loading }] = useUpdateProfileMutation()

  const [avatarUrl, setAvatarUrl] = useState(owner.avatarUrl)
  const [name, setName] = useState(owner.name)

  const [social, setSocial] = useState<UpdateProfileSocialsInput[]>(
    getSocialInitialValue(owner.social)
  )

  const onSubmit = async () => {
    await updateProfile({ variables: { input: { avatarUrl, name, social } } })
    await onSuccess()
  }

  return (
    <form id="update-profile-form">
      <ImageUploader label="Avatar" initialValue={owner.avatarUrl} onSuccess={setAvatarUrl} />

      <InputFormItem
        field="name"
        label="Name"
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
        className={classes.name}
      />

      <SocialForm social={social} setSocial={setSocial} />

      <Button
        variant="contained"
        color="secondary"
        loading={loading}
        onClick={onSubmit}
        className={classes.button}
      >
        Save
      </Button>
    </form>
  )
}
