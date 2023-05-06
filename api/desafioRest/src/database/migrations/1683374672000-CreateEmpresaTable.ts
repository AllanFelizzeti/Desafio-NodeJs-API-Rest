import { type } from "os"
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEmpresaTable1683374672000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'empresa',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'razao_social',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                        length: '30',
                        isNullable: false
                    },
                    {
                        name: 'cep',
                        type: 'varchar',
                        length: '15',
                        isNullable: false
                    },
                    {
                        name: 'cidade',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'estado',
                        type: 'varchar',
                        length: '30',
                        isNullable: false
                    },
                    {
                        name: 'bairro',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'complemento',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
