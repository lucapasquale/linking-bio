import { Resolver, Mutation, Args, InputType, Field, ObjectType } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { User } from '~prisma/generated/client'
import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'
import { CurrentUser } from '~users/graphql/current-user.decorator'
import { PagesService } from '~pages/pages.service'
import { PageType } from '~pages/graphql/types/page.type'

import { LinkType } from './types/link.type'
import { LinksService } from '../links.service'

@InputType()
class AddLinkInput {
  @Field(() => String)
  title: string

  @Field(() => String)
  url: string
}

@ObjectType()
class AddLinkResponse {
  @Field(() => PageType)
  page: PageType

  @Field(() => LinkType)
  link: LinkType
}

@Resolver(() => PageType)
export class AddLinkResolver {
  constructor(private pagesService: PagesService, private linksService: LinksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => AddLinkResponse)
  async addLink(@CurrentUser() user: User, @Args('input') input: AddLinkInput) {
    const page = await this.pagesService.findOneByUserId(user.id)
    const links = await this.linksService.findFromPage(page.id)

    const link = await this.linksService.insertLink({
      ...input,
      pageId: page.id,
      sortOrder: links.length,
    })

    return { page, link }
  }
}
