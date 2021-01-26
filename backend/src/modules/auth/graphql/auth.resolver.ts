import { Resolver, Mutation, Args, ObjectType, Field, InputType } from '@nestjs/graphql'

import { UsersService } from '~users/users.service'
import { PagesService } from '~pages/pages.service'

import { AuthService } from '../auth.service'

@InputType()
export class SignupInput {
  @Field(() => String)
  email: string

  @Field(() => String)
  password: string

  @Field(() => String)
  slug: string

  @Field(() => String)
  name: string
}

@ObjectType()
class SignupResponse {
  @Field(() => String)
  accessToken: string

  @Field(() => String)
  refreshToken: string
}

@ObjectType()
class LoginResponse {
  @Field(() => String)
  accessToken: string

  @Field(() => String)
  refreshToken: string
}

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private pagesService: PagesService
  ) {}

  @Mutation(() => SignupResponse)
  async signup(@Args('input') input: SignupInput) {
    const slug = input.slug.replace(/[^a-z0-9-]+/gi, '').toLocaleLowerCase()

    const [existingSlug, existingEmail, hashedPassword] = await Promise.all([
      this.pagesService.findOneBySlug(slug),
      this.usersService.findOneByEmail(input.email),
      this.authService.hashPassword(input.password),
    ])

    if (existingSlug || ['auth', 'privacy-policy', 'help', 'admin'].includes(slug)) {
      throw new Error('Slug already used')
    }

    if (existingEmail) {
      throw new Error('Email already used')
    }

    const user = await this.usersService.create({
      hashedPassword,
      email: input.email,
      name: input.name,
    })

    const [{ accessToken, refreshToken }] = await Promise.all([
      this.authService.generateTokens(user),
      this.pagesService.create({ slug, user }),
    ])

    return { token: accessToken, accessToken, refreshToken }
  }

  @Mutation(() => LoginResponse)
  async login(@Args('email') email: string, @Args('password') password: string) {
    const user = await this.authService.login(email, password)

    const { accessToken, refreshToken } = await this.authService.generateTokens(user)

    return { token: accessToken, accessToken, refreshToken }
  }
}
