import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersModule } from '~users/users.module'

import { Page } from './entities/page.entity'

import { PagesService } from './pages.service'
import { PagesResolver } from './graphql/pages.resolver'
import { UserPageResolver } from './graphql/user-page.resolver'
import { UpdatePageResolver } from './graphql/update-page.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([Page]), forwardRef(() => UsersModule)],
  providers: [PagesService, PagesResolver, UpdatePageResolver, UserPageResolver],
  exports: [TypeOrmModule, PagesService],
})
export class PagesModule {}
