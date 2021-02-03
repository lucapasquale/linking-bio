import { Module, forwardRef } from '@nestjs/common'

import { PagesModule } from '~pages/pages.module'
import { CommonModule } from '~common/common.module'

import { UsersService } from './users.service'
import { UsersResolver } from './graphql/users.resolver'
import { UpdateProfileResolver } from './graphql/update-profile.resolver'

@Module({
  imports: [CommonModule, forwardRef(() => PagesModule)],
  providers: [UsersService, UsersResolver, UpdateProfileResolver],
  exports: [UsersService],
})
export class UsersModule {}
