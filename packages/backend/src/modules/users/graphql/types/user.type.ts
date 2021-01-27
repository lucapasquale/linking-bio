import { ObjectType, ID, Field } from '@nestjs/graphql'

import { UserRole } from '../../enums/user-role.enum'
import { SocialLink } from './social-link.type'

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string

  @Field(() => UserRole)
  role: UserRole

  @Field(() => [SocialLink])
  social: SocialLink[]
}
