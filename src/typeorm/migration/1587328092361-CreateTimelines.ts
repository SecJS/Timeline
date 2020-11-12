import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateTimelines1587328092361 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'timelines',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'method',
            type: 'enum',
            enum: ['create', 'update', 'delete', 'upload', 'status_changed'],
            enumName: 'timelineMethodEnum',
          },
          {
            name: 'causer_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'causer_type',
            type: 'enum',
            enum: ['user', 'admin', 'driver', 'seller', 'client', 'customer', 'beneficiary'],
            enumName: 'timelineCauserEnum',
          },
          {
            name: 'model_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'model_type',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'properties',
            type: 'string',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('timelines')
  }
}
