import { Resolver, ResolveField, Parent, Field, ObjectType } from '@nestjs/graphql'

import { SocialLink } from '~users/graphql/types/social-link.type'

import { LinkType } from './types/link.type'
import { LinksService } from '../links.service'
import { PageType } from '../../graphql/types/page.type'

@ObjectType()
export class Owner {
  @Field(() => String)
  name: string

  @Field(() => String, { nullable: true })
  avatarUrl?: string

  @Field(() => [SocialLink])
  social: SocialLink[]
}

@Resolver(() => PageType)
export class PageLinksResolver {
  constructor(private linksService: LinksService) {}

  @ResolveField(() => [LinkType])
  async links(@Parent() page: PageType) {
    return this.linksService.findFromPage(page.id)
  }
}
