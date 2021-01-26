import { Resolver, Query, Args, ResolveField, Parent, Field, ObjectType } from '@nestjs/graphql'

import { UsersService } from '~users/users.service'
import { SocialLink } from '~users/graphql/types/social-link.type'

import { PagesService } from '../pages.service'
import { Page } from '../entities/page.entity'

@ObjectType()
export class Owner {
  @Field(() => String)
  name: string

  @Field(() => String, { nullable: true })
  avatarUrl?: string

  @Field(() => [SocialLink])
  social: SocialLink[]
}

@Resolver(() => Page)
export class PagesResolver {
  constructor(private pagesService: PagesService, private userService: UsersService) {}

  @Query(() => Page, { nullable: true })
  async page(@Args('slug') slug: string) {
    return this.pagesService.findOneBySlug(slug)
  }

  @ResolveField(() => Owner)
  async owner(@Parent() page: Page) {
    return this.userService.findOneById(page.userId)
  }
}