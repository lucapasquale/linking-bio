import { Resolver, ResolveField, Parent } from '@nestjs/graphql'

import { User } from '~prisma/generated/client'
import { UserType } from '~users/graphql/types/user.type'

import { PagesLoaders } from '../pages.loader'
import { PageType } from './types/page.type'

@Resolver(() => UserType)
export class UserPageResolver {
  constructor(private pagesLoaders: PagesLoaders) {}

  @ResolveField(() => PageType)
  async page(@Parent() user: User) {
    return this.pagesLoaders.findByUserId.load(user.id)
  }
}
