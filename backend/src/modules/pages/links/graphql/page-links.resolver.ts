import { Resolver, ResolveField, Parent, Field, ObjectType } from '@nestjs/graphql'

import { SocialLink } from '~users/graphql/types/social-link.type'
import { Page } from '~pages/entities/page.entity'

import { Link } from '../entities/link.entity'
import { LinksService } from '../links.service'

@ObjectType()
export class Owner {
  @Field(() => String)
  name: string

  @Field(() => String, { nullable: true })
  avatarUrl?: string

  @Field(() => [SocialLink])
  social: SocialLink[]
}

@Resolver(() => Page)
export class PageLinksResolver {
  constructor(private linksService: LinksService) {}

  @ResolveField(() => [Link])
  async links(@Parent() page: Page) {
    return this.linksService.findFromPage(page.id)
  }
}
