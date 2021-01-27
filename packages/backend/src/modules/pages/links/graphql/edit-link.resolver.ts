import { User } from '~prisma/generated/client'
import { Resolver, Mutation, Args, InputType, Field, ID, ObjectType } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'
import { CurrentUser } from '~users/graphql/current-user.decorator'
import { PagesService } from '~pages/pages.service'

import { LinkType } from './types/link.type'
import { LinksService } from '../links.service'
import { PageType } from '../../graphql/types/page.type'

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
  @Field(() => PageType)
  page: PageType

  @Field(() => LinkType)
  link: LinkType
}

@Resolver(() => PageType)
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
