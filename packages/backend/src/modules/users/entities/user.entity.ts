import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm'
import { ObjectType, ID, Field } from '@nestjs/graphql'

import { Page } from '~pages/entities/page.entity'

import { SocialLink } from '../graphql/types/social-link.type'
import { UserRole } from '../enums/user-role.enum'

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date

  @Column()
  name: string

  @Index()
  @Column()
  email: string

  @Column()
  hashedPassword: string

  @Column({ nullable: true })
  recoveryToken: string | null

  @Column({ default: UserRole.USER })
  @Field(() => UserRole)
  role: UserRole

  @Column({ nullable: true })
  avatarUrl: string | null

  @Column('jsonb', { default: [] })
  @Field(() => [SocialLink])
  social: SocialLink[]

  @OneToOne(() => Page)
  page: Page
}
