import { Resolver, Query } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'

import { User } from '../entities/user.entity'
import { UsersService } from '../users.service'
import { CurrentUser } from './current-user.decorator'

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async user(@CurrentUser() user: User) {
    return this.usersService.findOneById(user.id)
  }
}
