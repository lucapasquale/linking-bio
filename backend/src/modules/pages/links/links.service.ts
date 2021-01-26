import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Link } from './entities/link.entity'

export class LinksService {
  @InjectRepository(Link)
  private linkRepo: Repository<Link>

  async findOne(linkId: string) {
    return this.linkRepo.findOne(linkId)
  }

  async findFromPage(pageId: string) {
    return this.linkRepo.find({
      where: { pageId },
      order: { sortOrder: 'ASC', createdAt: 'ASC' },
    })
  }

  async insertLink(pageId: string, link: Partial<Link>) {
    return this.linkRepo.save({ ...link, pageId })
  }

  async updateLink(link: Link, payload: Partial<Link>) {
    await this.linkRepo.update(link.id, {
      ...payload,
    })

    return this.findOne(link.id)
  }

  async deleteLink(linkId: string) {
    return this.linkRepo.delete(linkId)
  }
}
