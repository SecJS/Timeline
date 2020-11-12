import { MigrationInterface, QueryRunner } from 'typeorm';
export default class CreateTimelines1587328092361 implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
