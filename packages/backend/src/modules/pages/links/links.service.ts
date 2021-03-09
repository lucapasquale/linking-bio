import { Inject } from '@nestjs/common'

import { Link } from '@prisma/client'
import { PrismaService } from '~common/prisma.service'

export class LinksService {
  constructor(
    @Inject(PrismaService)
    private prisma: PrismaService
  ) {}

  async findOne(id: number) {
    return this.prisma.link.findUnique({ where: { id } })
  }

  async findFromPage(pageId: number) {
    return this.prisma.link.findMany({
      where: { pageId },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    })
  }

  async insertLink(link: Pick<Link, 'pageId' | 'title' | 'url' | 'sortOrder'>) {
    return this.prisma.link.create({ data: link })
  }

  async updateLink(link: Link, payload: Partial<Link>) {
    return this.prisma.link.update({
      where: { id: link.id },
      data: { ...payload },
    })
  }

  async deleteLink(id: number) {
    return this.prisma.link.delete({ where: { id } })
  }
}
