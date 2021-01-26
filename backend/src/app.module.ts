import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from '~auth/auth.module'
import { CommonModule } from '~common/common.module'
import { UsersModule } from '~users/users.module'
import { PagesModule } from '~pages/pages.module'
import { LinksModule } from '~links/links.module'
import { UploadModule } from '~upload/upload.module'

import { SnakeNamingStrategy } from '~common/snake-naming-strategy'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        url: config.get('pgUri'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        namingStrategy: new SnakeNamingStrategy(),
      }),
    }),
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
