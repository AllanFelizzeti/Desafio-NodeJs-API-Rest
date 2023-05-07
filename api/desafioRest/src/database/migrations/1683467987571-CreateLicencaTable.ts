import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateLicencaTable1683467987571 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'licenca',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'numero',
                    type: 'varchar',
                    length: '50',
                },
                {
                    name: 'orgao_ambiental',
                    type: 'varchar',
                    length: '100',
                },
                {
                    name: 'emissao',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'validade',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'empresa_id',
                    type: 'integer',
                },
            ],
        }), true);

        // Criar relacionamento com a tabela Empresa
        await queryRunner.createForeignKey('licenca', new TableForeignKey({
            columnNames: ['empresa_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'empresa',
            // onDelete: 'CASCADE',
            // onUpdate:'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('licenca', 'empresa_id');
        await queryRunner.dropTable('licenca');
    }

}
