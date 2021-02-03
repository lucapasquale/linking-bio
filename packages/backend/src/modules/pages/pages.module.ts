import { Module, forwardRef } from '@nestjs/common'

import { UsersModule } from '~users/users.module'
import { CommonModule } from '~common/common.module'

import { PagesLoaders } from './pages.loader'
import { PagesService } from './pages.service'
import { PagesResolver } from './graphql/pages.resolver'
import { UserPageResolver } from './graphql/user-page.resolver'
import { UpdatePageResolver } from './graphql/update-page.resolver'

@Module({
  imports: [CommonModule, forwardRef(() => UsersModule)],
  providers: [PagesLoaders, PagesService, PagesResolver, UpdatePageResolver, UserPageResolver],
  exports: [PagesService],
})
export class PagesModule {}
