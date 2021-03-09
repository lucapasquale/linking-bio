import { Inject } from '@nestjs/common'

import { Page } from '@prisma/client'
import { PrismaService } from '~common/prisma.service'

export class PagesService {
  constructor(
    @Inject(PrismaService)
    private prisma: PrismaService
  ) {}

  async findOneBySlug(slug: string) {
    return this.prisma.page.findUnique({ where: { slug } })
  }

  async findOneByUserId(userId: number) {
    return this.prisma.page.findUnique({ where: { userId } })
  }

  async findByUserIds(userIds: number[]) {
    return this.prisma.page.findMany({
      where: { userId: { in: userIds } },
    })
  }

  async create(page: Pick<Page, 'slug' | 'userId'>) {
    return this.prisma.page.create({ data: { ...page } })
  }

  async update(page: Page, payload: Partial<Page>) {
    return this.prisma.page.update({
      where: { id: page.id },
      data: { ...payload },
    })
  }
}
