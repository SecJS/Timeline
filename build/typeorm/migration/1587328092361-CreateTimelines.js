"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class CreateTimelines1587328092361 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('timelines');
    }
}
exports.default = CreateTimelines1587328092361;
//# sourceMappingURL=1587328092361-CreateTimelines.js.map