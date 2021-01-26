import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { StatusController } from './status.controller'
import { GraphqlLoggingPlugin } from './logger/graphql-logger.plugin'
import { config } from './config'
import { Logger } from './logger'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [config] })],
  controllers: [StatusController],
  providers: [Logger, GraphqlLoggingPlugin],
})
export class CommonModule {}
