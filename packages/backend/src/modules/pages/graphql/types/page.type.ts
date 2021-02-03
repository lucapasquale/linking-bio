import { ObjectType, Field, Int } from '@nestjs/graphql'

import { PageTheme } from '../../enums/page-theme.enum'

@ObjectType()
export class PageType {
  @Field(() => Int)
  id: number

  @Field(() => String)
  slug: string

  @Field(() => PageTheme)
  theme: PageTheme
}
