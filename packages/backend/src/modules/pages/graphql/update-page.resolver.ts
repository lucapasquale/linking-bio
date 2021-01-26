import { UseGuards } from '@nestjs/common'
import { Resolver, Args, Field, ObjectType, Mutation, InputType } from '@nestjs/graphql'

import { GqlAuthGuard } from '~auth/graphql/jwt-auth.guard'
import { CurrentUser } from '~users/graphql/current-user.decorator'
import { User } from '~users/entities/user.entity'

import { PagesService } from '../pages.service'
import { Page } from '../entities/page.entity'
import { PageTheme } from '../enums/page-theme.enum'

@InputType()
class UpdatePageInput {
  @Field(() => PageTheme, { nullable: true })
  theme?: PageTheme
}

@ObjectType()
class UpdatePageResponse {
  @Field(() => Page)
  page: Page
}

@Resolver()
export class UpdatePageResolver {
  constructor(private pagesService: PagesService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => UpdatePageResponse)
  async updatePage(@CurrentUser() user: User, @Args('input') input: UpdatePageInput) {
    const page = await this.pagesService.findOneByUserId(user.id)
    const updatedPage = await this.pagesService.update(page, input)

    return { page: updatedPage }
  }
}
