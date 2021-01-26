import { Resolver, ResolveField, Parent } from '@nestjs/graphql'

import { User } from '~users/entities/user.entity'

import { PagesService } from '../pages.service'
import { Page } from '../entities/page.entity'

@Resolver(() => User)
export class UserPageResolver {
  constructor(private pagesService: PagesService) {}

  @ResolveField(() => Page)
  async page(@Parent() user: User) {
    return this.pagesService.findOneByUserId(user.id)
  }
}
