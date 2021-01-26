import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1604509198570 implements MigrationInterface {
    name = 'InitialMigration1604509198570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "email" character varying NOT NULL, "hashedPassword" character varying NOT NULL, "recoveryToken" character varying, "avatarUrl" character varying, "social" jsonb NOT NULL DEFAULT '[]', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
        await queryRunner.query(`CREATE TABLE "link" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "url" character varying NOT NULL, "sortOrder" integer NOT NULL DEFAULT 0, "pageId" uuid NOT NULL, CONSTRAINT "PK_26206fb7186da72fbb9eaa3fac9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9ef497943857684c079ad5b7be" ON "link" ("pageId") `);
        await queryRunner.query(`CREATE TABLE "page" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "slug" character varying NOT NULL, "theme" character varying NOT NULL DEFAULT 'DARK', "userId" uuid NOT NULL, CONSTRAINT "REL_ae1d917992dd0c9d9bbdad06c4" UNIQUE ("userId"), CONSTRAINT "PK_742f4117e065c5b6ad21b37ba1f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_875a4ba4aebdc1855dbf176dad" ON "page" ("slug") `);
        await queryRunner.query(`ALTER TABLE "link" ADD CONSTRAINT "FK_9ef497943857684c079ad5b7bec" FOREIGN KEY ("pageId") REFERENCES "page"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "page" ADD CONSTRAINT "FK_ae1d917992dd0c9d9bbdad06c4a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "page" DROP CONSTRAINT "FK_ae1d917992dd0c9d9bbdad06c4a"`);
        await queryRunner.query(`ALTER TABLE "link" DROP CONSTRAINT "FK_9ef497943857684c079ad5b7bec"`);
        await queryRunner.query(`DROP INDEX "IDX_875a4ba4aebdc1855dbf176dad"`);
        await queryRunner.query(`DROP TABLE "page"`);
        await queryRunner.query(`DROP INDEX "IDX_9ef497943857684c079ad5b7be"`);
        await queryRunner.query(`DROP TABLE "link"`);
        await queryRunner.query(`DROP INDEX "IDX_e12875dfb3b1d92d7d7c5377e2"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
