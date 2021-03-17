import { Resolver, Query, Args, ResolveField, Parent, Field, ObjectType } from '@nestjs/graphql'

import { Page } from '~prisma/generated/client'
import { UsersService } from '~users/users.service'
import { SocialLink } from '~users/graphql/types/social-link.type'

import { PagesService } from '../pages.service'
import { PageType } from './types/page.type'

@ObjectType()
export class Owner {
  @Field(() => String)
  name: string

  @Field(() => String, { nullable: true })
  avatarUrl?: string

  @Field(() => [SocialLink])
  social: SocialLink[]
}

@Resolver(() => PageType)
export class PagesResolver {
  constructor(private pagesService: PagesService, private userService: UsersService) {}

  @Query(() => PageType, { nullable: true })
  async page(@Args('slug') slug: string) {
    return this.pagesService.findOneBySlug(slug)
  }

  @ResolveField(() => Owner)
  async owner(@Parent() page: Page) {
    return this.userService.findOneById(page.userId)
  }
}
