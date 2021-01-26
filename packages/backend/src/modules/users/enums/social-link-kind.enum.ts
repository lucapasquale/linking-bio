import { registerEnumType } from '@nestjs/graphql'

export enum SocialLinkKind {
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
  LINKEDIN = 'LINKEDIN',
  REDDIT = 'REDDIT',
  TIKTOK = 'TIKTOK',
  TWITTER = 'TWITTER',
  YOUTUBE = 'YOUTUBE',
}

registerEnumType(SocialLinkKind, { name: 'SocialLinkKind' })
