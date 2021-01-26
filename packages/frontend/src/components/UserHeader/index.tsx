import * as R from 'ramda'
import React, { FC, useMemo } from 'react'
import { Cloudinary } from 'cloudinary-core'
import { Avatar, makeStyles, Typography } from '@material-ui/core'

import { Page } from '../../modules/Bio/graphql/use-page'
import { SocialLinks } from './SocialLinks'

const cloudinaryCore = new Cloudinary({ cloud_name: 'linkingbio', secure: true })

const IMAGE_SIZE = 96

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    paddingTop: theme.spacing(8),
  },
  avatar: {
    objectFit: 'cover',
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    color: theme.palette.getContrastText(theme.palette.grey[500]),
  },
  name: {
    zIndex: 1,
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
    color: theme.palette.getContrastText(theme.palette.background.default),
  },
}))

type Props = {
  page: Page
}

export const UserHeader: FC<Props> = ({ page }) => {
  const classes = useStyles()

  const avatarUrl = useMemo(() => {
    if (!page.owner.avatarUrl) {
      return undefined
    }

    if (page.owner.avatarUrl.includes('cloudinary')) {
      const fileName = R.last(page.owner.avatarUrl.split('/')) as string

      return cloudinaryCore.url(fileName, {
        crop: 'fill',
        quality: 'auto',
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
      })
    }

    return page.owner.avatarUrl
  }, [page.owner.avatarUrl])

  return (
    <header className={classes.wrapper}>
      <Avatar src={avatarUrl} alt="Avatar picture" className={classes.avatar} />

      <Typography variant="h5" className={classes.name}>
        {page.owner.name}
      </Typography>

      <SocialLinks socialLinks={page.owner.social || []} />
    </header>
  )
}
