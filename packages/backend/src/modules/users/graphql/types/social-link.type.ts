import { ObjectType, Field } from '@nestjs/graphql'

import { SocialLinkKind } from '../../enums/social-link-kind.enum'

@ObjectType()
export class SocialLink {
  @Field(() => SocialLinkKind)
  kind: SocialLinkKind

  @Field(() => String)
  username: string

  @Field(() => String)
  url: string
}
