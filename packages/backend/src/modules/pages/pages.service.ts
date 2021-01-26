import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Page } from './entities/page.entity'

export class PagesService {
  @InjectRepository(Page)
  private pageRepo: Repository<Page>

  async findOneBySlug(slug: string) {
    return this.pageRepo.findOne({ slug })
  }

  async findOneByUserId(userId: string) {
    return this.pageRepo.findOne({ userId })
  }

  async create(page: Partial<Page>) {
    return this.pageRepo.save(page)
  }

  async update(page: Page, payload: Partial<Page>) {
    await this.pageRepo.update(page.id, {
      ...payload,
    })

    return this.pageRepo.findOne(page.id)
  }
}
