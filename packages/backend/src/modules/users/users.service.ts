import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { User } from './entities/user.entity'

export class UsersService {
  @InjectRepository(User)
  private userRepo: Repository<User>

  async findOneById(id: string) {
    return this.userRepo.findOne({ id })
  }

  async findOneByEmail(email: string) {
    return this.userRepo.findOne({ email })
  }

  async findOneByRecoveryToken(recoveryToken: string) {
    return this.userRepo.findOne({ recoveryToken })
  }

  async create(user: Partial<User>) {
    return this.userRepo.save(user)
  }

  async update(user: User, payload: Partial<User>) {
    await this.userRepo.update(user.id, {
      ...payload,
    })

    return this.findOneById(user.id)
  }
}
