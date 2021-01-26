import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm'
import { ObjectType, Field, ID } from '@nestjs/graphql'

import { User } from '~users/entities/user.entity'
import { Link } from '~links/entities/link.entity'

import { PageTheme } from '../enums/page-theme.enum'

@Entity()
@ObjectType()
export class Page {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date

  @Index()
  @Column()
  @Field(() => String)
  slug: string

  @Column({ default: PageTheme.DARK })
  @Field(() => PageTheme)
  theme: PageTheme

  @OneToOne(() => User)
  @JoinColumn()
  user: User
  @Column()
  userId: string

  @OneToMany(() => Link, (link) => link.page)
  links: Link[]
}
