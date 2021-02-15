import * as R from 'ramda'
import { Resolver, Query, InputType, Field, Int, Args } from '@nestjs/graphql'
import { Prisma, User } from '@prisma/client'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'

import { UsersService } from '../users.service'
import { UserType } from './types/user.type'

@InputType()
class StringFieldInput {
  @Field(() => String, { nullable: true })
  _eq?: string

  @Field(() => [String], { nullable: true })
  _in?: string[]

  @Field(() => [String], { nullable: true })
  _notIn?: string[]

  @Field(() => String, { nullable: true })
  _gt?: string

  @Field(() => String, { nullable: true })
  _gte?: string

  @Field(() => String, { nullable: true })
  _lt?: string

  @Field(() => String, { nullable: true })
  _lte?: string

  @Field(() => String, { nullable: true })
  _contains?: string

  @Field(() => String, { nullable: true })
  _startsWith?: string

  @Field(() => String, { nullable: true })
  _endsWith?: string
}

@InputType()
class IntFieldInput {
  @Field(() => Int, { nullable: true })
  _eq?: number

  @Field(() => [Int], { nullable: true })
  _in?: number[]

  @Field(() => [Int], { nullable: true })
  _notIn?: number[]

  @Field(() => Int, { nullable: true })
  _gt?: number

  @Field(() => Int, { nullable: true })
  _gte?: number

  @Field(() => Int, { nullable: true })
  _lt?: number

  @Field(() => Int, { nullable: true })
  _lte?: number
}

@InputType()
export class FindUsersInput {
  @Field(() => [FindUsersInput], { nullable: true })
  _or?: FindUsersInput[]

  @Field(() => [FindUsersInput], { nullable: true })
  _and?: FindUsersInput[]

  @Field(() => FindUsersInput, { nullable: true })
  _not?: FindUsersInput

  @Field(() => IntFieldInput, { nullable: true })
  id?: IntFieldInput

  @Field(() => StringFieldInput, { nullable: true })
  email?: StringFieldInput
}

@Resolver()
export class TestUsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [UserType])
  async users(@Args('where') where: FindUsersInput) {
    // return this.usersService.findMany({
    //   id: { gt: where.id._gt },
    // })

    return this.usersService.findMany(parseWhere(where))
  }
}

function parseWhere(where: FindUsersInput): Prisma.UserWhereInput {
  return {
    ...(where._or && { OR: where._or.map(parseWhere) }),
    ...(where._and && { AND: where._and.map(parseWhere) }),
    ...(where._not && { NOT: parseWhere(where._not) }),

    id: parseIntField(where.id),
    email: parseStringField(where.email),
  }
}

function parseIntField(where: IntFieldInput): number | Prisma.IntFilter {
  if (!where) {
    return undefined
  }

  return {
    equals: where._eq,
    in: where._in,
    notIn: where._notIn,
    gt: where._gt,
    gte: where._gte,
    lt: where._lt,
    lte: where._lte,
  }
}

function parseStringField(where: StringFieldInput): string | Prisma.StringFilter {
  if (!where) {
    return undefined
  }

  return {
    equals: where._eq,
    in: where._in,
    notIn: where._notIn,
    gt: where._gt,
    gte: where._gte,
    lt: where._lt,
    lte: where._lte,
    contains: where._contains,
    startsWith: where._startsWith,
    endsWith: where._endsWith,
  }
}
