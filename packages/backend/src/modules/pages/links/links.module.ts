import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { PagesModule } from '~pages/pages.module'
import { AddLinkResolver } from './graphql/add-link.resolver'
import { EditLinksResolver } from './graphql/edit-link.resolver'
import { PageLinksResolver } from './graphql/page-links.resolver'
import { RemoveLinksResolver } from './graphql/remove-link.resolver'
import { SortLinksResolver } from './graphql/sort-links.resolver'

import { Link } from './entities/link.entity'
import { LinksService } from './links.service'

@Module({
  imports: [TypeOrmModule.forFeature([Link]), PagesModule],
  providers: [
    LinksService,

    AddLinkResolver,
    EditLinksResolver,
    PageLinksResolver,
    RemoveLinksResolver,
    SortLinksResolver,
  ],
  exports: [TypeOrmModule, LinksService],
})
export class LinksModule {}
