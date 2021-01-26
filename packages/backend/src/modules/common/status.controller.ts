import { Controller, Get, UseInterceptors } from '@nestjs/common'

import { LoggingInterceptor } from './logger/logging.interceptor'

@Controller('status')
export class StatusController {
  @Get()
  @UseInterceptors(LoggingInterceptor)
  async status() {
    return {
      status: 'ok',
    }
  }
}
