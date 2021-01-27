import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

import { AuthModule } from '~auth/auth.module'
import { CommonModule } from '~common/common.module'
import { UsersModule } from '~users/users.module'
import { PagesModule } from '~pages/pages.module'
import { LinksModule } from '~links/links.module'
import { UploadModule } from '~upload/upload.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      introspection: true,
      autoSchemaFile: true,
      context: ({ req }) => ({ req }),
      engine: { reportSchema: true, graphVariant: 'current' },
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
