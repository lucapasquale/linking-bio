import { Module } from '@nestjs/common'

import { PagesModule } from '~pages/pages.module'
import { CommonModule } from '~common/common.module'

import { AddLinkResolver } from './graphql/add-link.resolver'
import { EditLinksResolver } from './graphql/edit-link.resolver'
import { PageLinksResolver } from './graphql/page-links.resolver'
import { RemoveLinksResolver } from './graphql/remove-link.resolver'
import { SortLinksResolver } from './graphql/sort-links.resolver'

import { LinksService } from './links.service'

@Module({
  imports: [CommonModule, PagesModule],
  providers: [
    LinksService,

    AddLinkResolver,
    EditLinksResolver,
    PageLinksResolver,
    RemoveLinksResolver,
    SortLinksResolver,
  ],
  exports: [LinksService],
})
export class LinksModule {}
