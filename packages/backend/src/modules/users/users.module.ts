import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { PagesModule } from '~pages/pages.module'

import { User } from './entities/user.entity'
import { UsersService } from './users.service'
import { UsersResolver } from './graphql/users.resolver'
import { UpdateProfileResolver } from './graphql/update-profile/update-profile.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => PagesModule)],
  providers: [UsersService, UsersResolver, UpdateProfileResolver],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}
