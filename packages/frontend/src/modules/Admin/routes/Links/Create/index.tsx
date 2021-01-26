import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'

import { Button } from '~components/Button'

import { UserPageGQL, userPageQuery } from '../../../graphql/user-page'
import { FormValues, LinkForm } from '../components/LinkForm'
import { addLinkMutation } from './graphql/add-link'

const useStyles = makeStyles((theme) => ({
  buttonWrapper: { display: 'flex', justifyContent: 'flex-end', marginTop: theme.spacing(2) },
}))

export const CreateLink: FC = () => {
  const router = useRouter()
  const classes = useStyles()

  const [addLink, { loading: addLoading }] = addLinkMutation()
  const { loading, data } = userPageQuery()

  if (loading) {
    return null
  }

  if (!data || !data.user) {
    router.push('/')
    return null
  }

  const onSubmit = async (input: FormValues) => {
    await addLink({
      variables: { input },
      awaitRefetchQueries: true,
      refetchQueries: [{ query: UserPageGQL }],
    })

    router.push('/admin')
  }

  return (
    <>
      <LinkForm onSubmit={onSubmit} />

      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          form="link-form"
          loading={addLoading}
        >
          Save
        </Button>
      </div>
    </>
  )
}
