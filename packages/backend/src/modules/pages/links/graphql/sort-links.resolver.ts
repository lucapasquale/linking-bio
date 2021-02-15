import * as R from 'ramda'
import * as Bluebird from 'bluebird'
import { Resolver, Mutation, Args, Field, ObjectType, Int } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { User } from '@prisma/client'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'
import { CurrentUser } from '~users/graphql/current-user.decorator'
import { PagesService } from '~pages/pages.service'

import { LinksService } from '../links.service'
import { PageType } from '../../graphql/types/page.type'

@ObjectType()
export class SortLinkResponse {
  @Field(() => PageType)
  page: PageType
}

@Resolver(() => PageType)
export class SortLinksResolver {
  constructor(private pagesService: PagesService, private linksService: LinksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SortLinkResponse)
  async sortLinks(
    @CurrentUser() user: User,
    @Args('linkIds', { type: () => [Int] }) linkIds: number[]
  ) {
    const page = await this.pagesService.findOneByUserId(user.id)
    const links = await this.linksService.findFromPage(page.id)

    const pageLinkIds = links.map(R.prop('id'))
    if (!R.equals([...pageLinkIds].sort(), [...linkIds].sort())) {
      throw new Error('invalid links')
    }

    await Bluebird.map(linkIds, async (linkId, index) => {
      const link = links.find((link) => link.id === linkId)
      await this.linksService.updateLink(link, { sortOrder: index })
    })

    return { page }
  }
}
