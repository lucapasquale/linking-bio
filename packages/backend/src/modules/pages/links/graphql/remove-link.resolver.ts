import { Resolver, Mutation, Args, Field, Int, ObjectType } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { User } from '@prisma/client'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'
import { CurrentUser } from '~users/graphql/current-user.decorator'
import { PagesService } from '~pages/pages.service'
import { PageType } from '~pages/graphql/types/page.type'

import { LinkType } from './types/link.type'
import { LinksService } from '../links.service'

@ObjectType()
class RemoveLinkResponse {
  @Field(() => PageType)
  page: PageType

  @Field(() => LinkType)
  link: LinkType
}

@Resolver(() => PageType)
export class RemoveLinksResolver {
  constructor(private pagesService: PagesService, private linksService: LinksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => RemoveLinkResponse)
  async removeLink(@CurrentUser() user: User, @Args('linkId', { type: () => Int }) linkId: number) {
    const [page, existingLink] = await Promise.all([
      this.pagesService.findOneByUserId(user.id),
      this.linksService.findOne(linkId),
    ])

    if (!existingLink || existingLink.pageId !== page.id) {
      throw new Error('unauthorized')
    }

    await this.linksService.deleteLink(linkId)

    return { page, link: existingLink }
  }
}
