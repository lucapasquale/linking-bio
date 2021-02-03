import { Inject } from '@nestjs/common'

import { User } from '~prisma/generated/client'
import { PrismaService } from '~common/prisma.service'

export class UsersService {
  constructor(
    @Inject(PrismaService)
    private prisma: PrismaService
  ) {}

  async findOneById(id: number) {
    return this.prisma.user.findUnique({ where: { id } })
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } })
  }

  async findOneByRecoveryToken(recoveryToken: string) {
    return this.prisma.user.findFirst({ where: { recoveryToken } })
  }

  async create(user: Pick<User, 'name' | 'email' | 'hashedPassword'>) {
    return this.prisma.user.create({ data: { ...user } })
  }

  async update(user: User, payload: Partial<User>) {
    return this.prisma.user.update({
      where: { id: user.id },
      data: { ...payload },
    })
  }
}
