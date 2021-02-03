import { ObjectType, Int, Field } from '@nestjs/graphql'

import { UserRole } from '../../enums/user-role.enum'
import { SocialLink } from './social-link.type'

@ObjectType('User')
export class UserType {
  @Field(() => Int)
  id: number

  @Field(() => UserRole)
  role: UserRole

  @Field(() => [SocialLink])
  social: SocialLink[]
}
