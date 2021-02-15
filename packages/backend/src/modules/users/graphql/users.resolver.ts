import { User } from '@prisma/client'
import { Resolver, Query } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'

import { UsersService } from '../users.service'
import { CurrentUser } from './current-user.decorator'
import { UserType } from './types/user.type'

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => UserType)
  async user(@CurrentUser() user: User) {
    return this.usersService.findOneById(user.id)
  }
}
