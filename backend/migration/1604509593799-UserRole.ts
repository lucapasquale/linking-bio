import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserRole1604509593799 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users
        ADD COLUMN "role" character varying NOT NULL DEFAULT 'USER'
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE users
        DROP COLUMN "role"
    `)
  }
}
