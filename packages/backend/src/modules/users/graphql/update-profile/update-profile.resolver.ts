import { Resolver, Mutation, ObjectType, Field, InputType, Args } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'

import { User } from '../../entities/user.entity'
import { UsersService } from '../../users.service'
import { SocialLinkKind } from '../../enums/social-link-kind.enum'
import { CurrentUser } from '../current-user.decorator'
import { upsertSocialLinks } from './logic'

@InputType()
export class UpdateProfileSocialsInput {
  @Field(() => SocialLinkKind)
  kind: SocialLinkKind

  @Field(() => String)
  value: string
}

@InputType()
export class UpdateProfileInput {
  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  avatarUrl?: string

  @Field(() => [UpdateProfileSocialsInput], { nullable: true })
  social?: UpdateProfileSocialsInput[]
}

@ObjectType()
class UpdateProfileResponse {
  @Field(() => User)
  user: User
}

@Resolver()
export class UpdateProfileResolver {
  constructor(private usersService: UsersService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => UpdateProfileResponse)
  async updateProfile(@CurrentUser() user: User, @Args('input') input: UpdateProfileInput) {
    const updatedUser = await this.usersService.update(user, {
      ...(input.name ? { name: input.name } : {}),
      ...(input.avatarUrl !== undefined ? { avatarUrl: input.avatarUrl } : {}),
      ...(input.social ? { social: upsertSocialLinks(input.social) } : {}),
    })

    return { user: updatedUser }
  }
}