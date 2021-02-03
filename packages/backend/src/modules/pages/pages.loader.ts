import * as DataLoader from 'dataloader'
import { Injectable, Scope } from '@nestjs/common'

import { Page } from '~prisma/generated/client'
import { PagesService } from './pages.service'

@Injectable({ scope: Scope.REQUEST })
export class PagesLoaders {
  constructor(private readonly pagesService: PagesService) {}

  public readonly findByUserId = new DataLoader<number, Page>(async (userIds) => {
    const pages = await this.pagesService.findByUserIds([...userIds])

    return userIds.map((userId) => pages.find((p) => p.userId === userId))
  })
}
