import { ObjectType, ID, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class LinkType {
  @Field(() => ID)
  id: string

  @Field(() => String)
  title: string

  @Field(() => String)
  url: string

  @Field(() => Int)
  sortOrder: number
}
