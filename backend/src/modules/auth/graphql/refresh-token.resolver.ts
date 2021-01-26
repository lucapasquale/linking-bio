import { JwtService } from '@nestjs/jwt'
import { Resolver, Mutation, ObjectType, Field, Args } from '@nestjs/graphql'

import { UsersService } from '~users/users.service'

import { AuthService } from '../auth.service'

@ObjectType()
class RefreshTokenResponse {
  @Field(() => String)
  accessToken: string

  @Field(() => String)
  refreshToken: string
}

@Resolver()
export class RefreshTokenResolver {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  @Mutation(() => RefreshTokenResponse)
  async refreshToken(@Args('token') refreshToken: string) {
    const payload = await this.jwtService.verifyAsync(refreshToken)
    const user = await this.usersService.findOneById(payload.sub)

    return this.authService.generateTokens(user)
  }
}
