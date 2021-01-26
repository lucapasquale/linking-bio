import { parse } from 'url'
import { SocialLink } from '../types/social-link.type'
import { SocialLinkKind } from '../../enums/social-link-kind.enum'
import { UpdateProfileInput, UpdateProfileSocialsInput } from './update-profile.resolver'

export function upsertSocialLinks(social: UpdateProfileInput['social']): SocialLink[] {
  return social
    .filter(input => !!input.value)
    .map(socialInput => ({
      kind: socialInput.kind,
      ...getUrlUsername(socialInput),
    }))
}

function getUrlUsername(input: UpdateProfileSocialsInput) {
  const url = parse(input.value.replace(/\s/g, ''))
  if (url.host) {
    return { username: url.path.replace('/', ''), url: url.href }
  }

  return { username: input.value, url: buildSocialUrl(input) }
}

function buildSocialUrl(input: UpdateProfileSocialsInput) {
  switch (input.kind) {
    case SocialLinkKind.FACEBOOK:
      return `https://www.facebook.com/${input.value}`

    case SocialLinkKind.INSTAGRAM:
      return `https://www.instagram.com/${input.value}`

    case SocialLinkKind.LINKEDIN:
      return `https://www.linkedin.com/in/${input.value}`

    case SocialLinkKind.REDDIT:
      return `https://www.reddit.com/${input.value}`

    case SocialLinkKind.TIKTOK:
      return `https://www.tiktok.com/@${input.value}`

    case SocialLinkKind.TWITTER:
      return `https://www.twitter.com/${input.value}`

    case SocialLinkKind.YOUTUBE:
      return `https://www.youtube.com/channel/${input.value}`

    default:
      return input.value
  }
}
