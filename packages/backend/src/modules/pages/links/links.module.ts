import { Module } from '@nestjs/common'

import { PagesModule } from '~pages/pages.module'
import { PrismaService } from '../../common/prisma.service'

import { AddLinkResolver } from './graphql/add-link.resolver'
import { EditLinksResolver } from './graphql/edit-link.resolver'
import { PageLinksResolver } from './graphql/page-links.resolver'
import { RemoveLinksResolver } from './graphql/remove-link.resolver'
import { SortLinksResolver } from './graphql/sort-links.resolver'

import { LinksService } from './links.service'

@Module({
  imports: [PagesModule],
  providers: [
    PrismaService,
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
