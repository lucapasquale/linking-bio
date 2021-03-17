import { parse } from 'url'
import { Resolver, Mutation, ObjectType, Field, InputType, Args } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { User } from '~prisma/generated/client'
import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'

import { UsersService } from '../users.service'
import { SocialLinkKind } from '../enums/social-link-kind.enum'
import { CurrentUser } from './current-user.decorator'
import { UserType } from './types/user.type'
import { SocialLink } from './types/social-link.type'

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
  @Field(() => UserType)
  user: UserType
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
      ...(input.social ? { social: upsertSocialLinks(input.social) as any } : {}),
    })

    return { user: updatedUser }
  }
}

function upsertSocialLinks(social: UpdateProfileInput['social']): SocialLink[] {
  return social.filter((input) => !!input.value).map(getUrlValues)
}

function getUrlValues(input: UpdateProfileSocialsInput) {
  const url = parse(input.value.replace(/\s/g, ''))
  if (url.host) {
    return { kind: input.kind, username: url.path.replace('/', ''), url: url.href }
  }

  return { kind: input.kind, username: input.value, url: buildSocialUrl(input) }
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
