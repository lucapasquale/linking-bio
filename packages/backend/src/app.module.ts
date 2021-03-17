import { join } from 'path'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'

import { AuthModule } from '~auth/auth.module'
import { CommonModule } from '~common/common.module'
import { UsersModule } from '~users/users.module'
import { PagesModule } from '~pages/pages.module'
import { LinksModule } from '~links/links.module'
import { UploadModule } from '~upload/upload.module'

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        introspection: true,
        sortSchema: true,
        autoSchemaFile:
          config.get('env') === 'production' ? false : join(process.cwd(), 'src/schema.gql'),
        engine:
          config.get('env') === 'production'
            ? { reportSchema: true, graphVariant: 'current' }
            : false,
      }),
    }),

    AuthModule,
    CommonModule,
    PagesModule,
    LinksModule,
    UploadModule,
    UsersModule,
  ],
})
export class AppModule {}
