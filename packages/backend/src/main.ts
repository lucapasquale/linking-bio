import * as bodyParser from 'body-parser'
import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'

import { Logger } from '~common/logger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: new Logger() })

  app.use(bodyParser.json({ limit: '5mb' }))
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))

  const configService = app.get(ConfigService)
  await app.listen(configService.get<number>('port'))
}

bootstrap()
