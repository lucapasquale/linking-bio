import * as bcrypt from 'bcrypt'
import { Page, User } from '~prisma/generated/client'
import { JwtService } from '@nestjs/jwt'
import { Injectable, HttpService } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { UsersService } from '~users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  async hashPassword(password: string) {
    return bcrypt.hash(password, 8)
  }

  async login(email: string, password: string): Promise<User> {
    const user = await this.usersService.findOneByEmail(email)
    if (!user) {
      throw new Error('no user')
    }

    const validPassword = await bcrypt.compare(password, user.hashedPassword)
    if (!validPassword) {
      throw new Error('Wrong pass')
    }

    return user
  }

  async generateTokens(user: User) {
    return {
      accessToken: this.jwtService.sign({ sub: user.id, kind: 'acc' }),
      refreshToken: this.jwtService.sign({ sub: user.id, kind: 'ref' }, { expiresIn: '30d' }),
    }
  }

  async sendPasswordRecoveryEmail(user: User, page: Page) {
    const recovery_url = [
      'https://www.linkingbio.com/auth/recover-password?',
      `slug=${page.slug}`,
      `recoveryToken=${user.recoveryToken}`,
    ].join('&')

    await this.httpService
      .request({
        url: 'https://api.mailjet.com/v3.1/send',
        method: 'POST',
        auth: {
          username: this.configService.get('mailjet.username'),
          password: this.configService.get('mailjet.password'),
        },
        data: {
          Messages: [
            {
              From: {
                Email: 'support@linkingbio.com',
                Name: 'Linking Bio',
              },
              To: [
                {
                  Email: user.email,
                  Name: user.name,
                },
              ],
              TemplateID: 1117623,
              TemplateLanguage: true,
              Subject: 'Linking Bio - Password recovery',
              Variables: { recovery_url },
            },
          ],
        },
      })
      .toPromise()
  }
}
