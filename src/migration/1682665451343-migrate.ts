import { MigrationInterface, QueryRunner } from "typeorm";

export class migrate1682665451343 implements MigrationInterface {
    name = 'migrate1682665451343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "product_quantity"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "product_quantity" character varying NOT NULL`);
    }

}
