import { Module, forwardRef } from '@nestjs/common'

import { PagesModule } from '~pages/pages.module'

import { UsersService } from './users.service'
import { UsersResolver } from './graphql/users.resolver'
import { UpdateProfileResolver } from './graphql/update-profile/update-profile.resolver'

@Module({
  imports: [forwardRef(() => PagesModule)],
  providers: [UsersService, UsersResolver, UpdateProfileResolver],
  exports: [UsersService],
})
export class UsersModule {}
