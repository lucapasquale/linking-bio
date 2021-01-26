import { ObjectType, Field, ID } from '@nestjs/graphql'

import { PageTheme } from '../../enums/page-theme.enum'

@ObjectType()
export class PageType {
  @Field(() => ID)
  id: string

  @Field(() => String)
  slug: string

  @Field(() => PageTheme)
  theme: PageTheme
}
