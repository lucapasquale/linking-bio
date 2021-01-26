import { Resolver, Mutation, Args, InputType, Field, ID, ObjectType } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'
import { CurrentUser } from '~users/graphql/current-user.decorator'
import { User } from '~users/entities/user.entity'
import { Page } from '~pages/entities/page.entity'
import { PagesService } from '~pages/pages.service'

import { Link } from '../entities/link.entity'
import { LinksService } from '../links.service'

@InputType()
class EditLinkInput {
  @Field(() => ID)
  id: string

  @Field(() => String, { nullable: true })
  title: string

  @Field(() => String, { nullable: true })
  url: string
}

@ObjectType()
class EditLinkResponse {
  @Field(() => Page)
  page: Page

  @Field(() => Link)
  link: Link
}

@Resolver(() => Page)
export class EditLinksResolver {
  constructor(private pagesService: PagesService, private linksService: LinksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => EditLinkResponse)
  async editLink(@CurrentUser() user: User, @Args('input') input: EditLinkInput) {
    const [page, existingLink] = await Promise.all([
      this.pagesService.findOneByUserId(user.id),
      this.linksService.findOne(input.id),
    ])

    if (!existingLink || existingLink.pageId !== page.id) {
      throw new Error('unauthorized')
    }

    const link = await this.linksService.updateLink(existingLink, input)

    return { page, link }
  }
}
