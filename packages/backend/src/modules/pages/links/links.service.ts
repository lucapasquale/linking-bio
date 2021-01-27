import { Link } from '~prisma/generated/client'
import { Inject } from '@nestjs/common'

import { PrismaService } from '~common/prisma.service'

export class LinksService {
  constructor(
    @Inject(PrismaService)
    private prisma: PrismaService
  ) {}

  async findOne(id: string) {
    return this.prisma.link.findUnique({ where: { id } })
  }

  async findFromPage(pageId: string) {
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

  async deleteLink(id: string) {
    return this.prisma.link.delete({ where: { id } })
  }
}
