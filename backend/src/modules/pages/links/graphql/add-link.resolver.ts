import { Resolver, Mutation, Args, InputType, Field, ObjectType } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'
import { CurrentUser } from '~users/graphql/current-user.decorator'
import { User } from '~users/entities/user.entity'
import { Page } from '~pages/entities/page.entity'
import { PagesService } from '~pages/pages.service'

import { Link } from '../entities/link.entity'
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
  @Field(() => Page)
  page: Page

  @Field(() => Link)
  link: Link
}

@Resolver(() => Page)
export class AddLinkResolver {
  constructor(private pagesService: PagesService, private linksService: LinksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => AddLinkResponse)
  async addLink(@CurrentUser() user: User, @Args('input') input: AddLinkInput) {
    const page = await this.pagesService.findOneByUserId(user.id)
    const links = await this.linksService.findFromPage(page.id)

    const link = await this.linksService.insertLink(page.id, {
      ...input,
      sortOrder: links.length,
    })

    return { page, link }
  }
}
