import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import { ObjectType, ID, Field, Int } from '@nestjs/graphql'

import { Page } from '~pages/entities/page.entity'

@Entity()
@ObjectType()
export class Link {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date

  @Column()
  @Field(() => String)
  title: string

  @Column()
  @Field(() => String)
  url: string

  @Column('integer', { default: 0 })
  @Field(() => Int)
  sortOrder: number

  @ManyToOne(() => Page, (page) => page.links)
  page: Page
  @Index()
  @Column()
  pageId: string
}
