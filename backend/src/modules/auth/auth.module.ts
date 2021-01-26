import { JwtModule } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { PassportModule } from '@nestjs/passport'
import { Module, HttpModule } from '@nestjs/common'

import { UsersModule } from '~users/users.module'
import { PagesModule } from '~pages/pages.module'

import { JwtStrategy } from './jwt.strategy'
import { AuthService } from './auth.service'
import { AuthResolver } from './graphql/auth.resolver'
import { PasswordResolver } from './graphql/password.resolver'
import { RefreshTokenResolver } from './graphql/refresh-token.resolver'

@Module({
  imports: [
    HttpModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('jwtSecret'),
        signOptions: { expiresIn: '6h' },
      }),
    }),

    UsersModule,
    PagesModule,
  ],
  providers: [AuthService, JwtStrategy, AuthResolver, PasswordResolver, RefreshTokenResolver],
  exports: [AuthService],
})
export class AuthModule {}
