import React, { FC } from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import { Instagram, Facebook, Twitter, Link, LinkedIn, Reddit, YouTube } from '@material-ui/icons'

import { SocialLink, SocialLinkKind } from '~helpers/graphql/generated'
import { TikTok } from '~components/Icons/TikTok'

const useStyles = makeStyles((theme) => ({
  nav: { margin: 'auto' },
  icon: { fontSize: 32, color: theme.palette.getContrastText(theme.palette.background.default) },
}))

type Props = {
  socialLinks: SocialLink[]
}

export const SocialLinks: FC<Props> = ({ socialLinks }) => {
  const classes = useStyles()

  return (
    <nav className={classes.nav}>
      {socialLinks.map((social, idx) => (
        <IconButton
          key={idx}
          target="_blank"
          rel="noreferrer"
          href={social.url}
          aria-label={social.kind}
        >
          {getSocialIcon(social.kind, classes.icon)}
        </IconButton>
      ))}
    </nav>
  )
}

export function getSocialIcon(kind: SocialLinkKind, className: string): React.ReactNode {
  switch (kind) {
    case SocialLinkKind.Facebook:
      return <Facebook className={className} />

    case SocialLinkKind.Instagram:
      return <Instagram className={className} />

    case SocialLinkKind.Linkedin:
      return <LinkedIn className={className} />

    case SocialLinkKind.Reddit:
      return <Reddit className={className} />

    case SocialLinkKind.Twitter:
      return <Twitter className={className} />

    case SocialLinkKind.Tiktok:
      return <TikTok className={className} />

    case SocialLinkKind.Youtube:
      return <YouTube className={className} />

    default:
      return <Link className={className} />
  }
}
