import { Resolver, ResolveField, Parent } from '@nestjs/graphql'

import { User } from '~prisma/generated/client'
import { UserType } from '~users/graphql/types/user.type'

import { PagesService } from '../pages.service'
import { PageType } from './types/page.type'

@Resolver(() => UserType)
export class UserPageResolver {
  constructor(private pagesService: PagesService) {}

  @ResolveField(() => PageType)
  async page(@Parent() user: User) {
    return this.pagesService.findOneByUserId(user.id)
  }
}
