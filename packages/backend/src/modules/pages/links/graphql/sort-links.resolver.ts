import * as R from 'ramda'
import * as Bluebird from 'bluebird'
import { Resolver, Mutation, Args, Field, ObjectType, ID } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'
import { CurrentUser } from '~users/graphql/current-user.decorator'
import { User } from '~users/entities/user.entity'
import { Page } from '~pages/entities/page.entity'
import { PagesService } from '~pages/pages.service'

import { LinksService } from '../links.service'

@ObjectType()
export class SortLinkResponse {
  @Field(() => Page)
  page: Page
}

@Resolver(() => Page)
export class SortLinksResolver {
  constructor(private pagesService: PagesService, private linksService: LinksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => SortLinkResponse)
  async sortLinks(
    @CurrentUser() user: User,
    @Args('linkIds', { type: () => [ID] }) linkIds: string[]
  ) {
    const page = await this.pagesService.findOneByUserId(user.id)
    const links = await this.linksService.findFromPage(page.id)

    const pageLinkIds = links.map(R.prop('id'))
    if (!R.equals([...pageLinkIds].sort(), [...linkIds].sort())) {
      throw new Error('invalid links')
    }

    await Bluebird.map(linkIds, async (linkId, index) => {
      const link = links.find(link => link.id === linkId)
      await this.linksService.updateLink(link, { sortOrder: index })
    })

    return { page }
  }
}
