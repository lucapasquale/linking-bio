import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

import { Button } from '~components/Button'

import { UserPageGQL, userPageQuery } from '../../../graphql/user-page'
import { FormValues, LinkForm } from '../components/LinkForm'
import { editLinkMutation } from './graphql/edit-link'
import { removeLinkMutation } from './graphql/remove-link'

const useStyles = makeStyles((theme) => ({
  buttonWrapper: { display: 'flex', justifyContent: 'space-between', marginTop: theme.spacing(2) },
}))

type Props = {
  linkId: string
}

export const EditLink: FC<Props> = ({ linkId }) => {
  const router = useRouter()
  const classes = useStyles()

  const [editLink, { loading: editLoading }] = editLinkMutation()
  const [removeLink, { loading: removeLoading }] = removeLinkMutation()
  const { loading, data } = userPageQuery()

  if (loading) {
    return null
  }

  if (!data || !data.user) {
    router.push('/')
    return null
  }

  const link = data.user.page.links.find((link) => link.id === linkId)
  if (!link) {
    router.push('/admin')
    return null
  }

  const onSubmit = async (input: FormValues) => {
    await editLink({
      variables: { input: { id: link.id, ...input } },
      awaitRefetchQueries: true,
      refetchQueries: [{ query: UserPageGQL }],
    })

    router.push('/admin')
  }

  const onDelete = async () => {
    await removeLink({
      variables: { linkId: link.id },
      awaitRefetchQueries: true,
      refetchQueries: [{ query: UserPageGQL }],
    })

    router.push('/admin')
  }

  return (
    <>
      <LinkForm defaultValues={link} onSubmit={onSubmit} />

      <div className={classes.buttonWrapper}>
        <Button loading={removeLoading} onClick={onDelete} startIcon={<Delete />}>
          Delete
        </Button>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          form="link-form"
          loading={editLoading}
        >
          Save
        </Button>
      </div>
    </>
  )
}
