import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Conversions1642948347327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Conversions',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment',
                        isGenerated: true
                    },
                    {
                        name: 'moedaOriginal',
                        type: 'varchar',
                    },
                    {
                        name: 'moedaDaConversão',
                        type: 'varchar'
                    },
                    {
                        name: 'valorEnviado',
                        type: 'decimal'
                    },
                    {
                        name: 'valorConvertido',
                        type: 'decimal'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Conversions')
    }

}
