import { Resolver, Mutation, Args, Field, ID, ObjectType } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'
import { CurrentUser } from '~users/graphql/current-user.decorator'
import { User } from '~users/entities/user.entity'
import { Page } from '~pages/entities/page.entity'
import { PagesService } from '~pages/pages.service'

import { Link } from '../entities/link.entity'
import { LinksService } from '../links.service'

@ObjectType()
class RemoveLinkResponse {
  @Field(() => Page)
  page: Page

  @Field(() => Link)
  link: Link
}

@Resolver(() => Page)
export class RemoveLinksResolver {
  constructor(private pagesService: PagesService, private linksService: LinksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => RemoveLinkResponse)
  async removeLink(@CurrentUser() user: User, @Args('linkId', { type: () => ID }) linkId: string) {
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
