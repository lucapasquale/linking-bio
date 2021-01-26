import * as R from 'ramda'
import { SocialLink, SocialLinkKind, UpdateProfileSocialsInput } from '~helpers/graphql/generated'

const kindsOrder = [
  SocialLinkKind.Facebook,
  SocialLinkKind.Instagram,
  SocialLinkKind.Linkedin,
  SocialLinkKind.Reddit,
  SocialLinkKind.Twitter,
  SocialLinkKind.Tiktok,
  SocialLinkKind.Youtube,
]

export function getSocialInitialValue(social: SocialLink[]): UpdateProfileSocialsInput[] {
  const remainingKinds = R.reject((kind) => social.some(R.propEq('kind', kind)), kindsOrder)

  return [
    ...social.map((s) => ({ kind: s.kind, value: s.username })),
    ...remainingKinds.map((kind) => ({ kind, value: '' })),
  ]
}
