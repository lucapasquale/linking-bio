import { ObjectType, Int, Field } from '@nestjs/graphql'

@ObjectType('Link')
export class LinkType {
  @Field(() => Int)
  id: number

  @Field(() => String)
  title: string

  @Field(() => String)
  url: string

  @Field(() => Int)
  sortOrder: number
}
