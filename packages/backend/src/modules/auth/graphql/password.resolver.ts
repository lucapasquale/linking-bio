import * as uuid from 'uuid'
import { UseGuards } from '@nestjs/common'
import { Resolver, Mutation, Args, ObjectType, Field, InputType } from '@nestjs/graphql'
import { User } from '@prisma/client'

import { CurrentUser } from '~users/graphql/current-user.decorator'
import { UsersService } from '~users/users.service'

import { AuthService } from '../auth.service'
import { GqlAuthGuard } from './jwt-auth.guard'
import { PagesService } from '../../pages/pages.service'

@ObjectType()
class ChangePasswordResponse {
  @Field(() => Boolean)
  success: boolean
}

@ObjectType()
class ForgotPasswordResponse {
  @Field(() => Boolean)
  success: boolean
}

@InputType()
class RecoverPasswordInput {
  @Field(() => String)
  slug: string

  @Field(() => String)
  newPassword: string

  @Field(() => String)
  recoveryToken: string
}
@ObjectType()
class RecoverPasswordResponse {
  @Field(() => String)
  accessToken: string

  @Field(() => String)
  refreshToken: string
}

@Resolver()
export class PasswordResolver {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private pagesService: PagesService
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ChangePasswordResponse)
  async changePassword(@CurrentUser() user: User, @Args('password') password: string) {
    const hashedPassword = await this.authService.hashPassword(password)

    await this.usersService.update(user, { hashedPassword })
    return { success: true }
  }

  @Mutation(() => ForgotPasswordResponse)
  async forgotPassword(@Args('email') email: string) {
    const user = await this.usersService.findOneByEmail(email)
    if (!user) {
      return { success: true }
    }

    const recoveryToken = uuid.v4()

    const [page] = await Promise.all([
      this.pagesService.findOneByUserId(user.id),
      this.usersService.update(user, { recoveryToken }),
    ])

    const updatedUser = await this.usersService.findOneById(user.id)
    await this.authService.sendPasswordRecoveryEmail(updatedUser, page)

    return { success: true }
  }

  @Mutation(() => RecoverPasswordResponse)
  async recoverPassword(@Args('input') input: RecoverPasswordInput) {
    const user = await this.usersService.findOneByRecoveryToken(input.recoveryToken)
    if (!user) {
      return { success: true }
    }

    const hashedPassword = await this.authService.hashPassword(input.newPassword)
    await this.usersService.update(user, { hashedPassword, recoveryToken: null })

    const { accessToken } = await this.authService.generateTokens(user)
    return { token: accessToken }
  }
}
