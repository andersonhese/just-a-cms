import { MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from 'typeorm'

export class CreateTables1656353467326 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(
      new Table({
        name: 'post',
        columns: [
          {
            name: 'id', type: 'char', isPrimary: true, width: 36,
          },
          {
            name: 'title', type: 'varchar', width: 150,
          },
          {
            name: 'content', type: 'json', isNullable: true,
          },
          {
            name: 'status', type: 'enum', enum: [ 'editing', 'published' ],
          },
          {
            name: 'createdAt', type: 'timestamp',
          },
          {
            name: 'updatedAt', type: 'timestamp', isNullable: true,
          }
        ]
      }),
      true
    )

    await queryRunner.createIndex(
      'post',
      new TableIndex({
        name: 'IDX_POST_TITLE', columnNames: ['title'],
      })
    )

    await queryRunner.createTable(
      new Table({
        name: 'author',
        columns: [
          {
            name: 'id', type: 'char', isPrimary: true, width: 36,
          },
          {
            name: 'name', type: 'varchar', width: 100,
          }
        ],
      }),
      true
    )

    await queryRunner.addColumn(
      'post',
      new TableColumn({
        name: 'authorId', type: 'char', width: 36,
      })
    )

    await queryRunner.createForeignKey(
      'post',
      new TableForeignKey({
        columnNames: ['authorId'], referencedTableName: 'author', referencedColumnNames: ['id'], onDelete: 'CASCADE',
      })
    )

  }

  public async down(queryRunner: QueryRunner): Promise<void> { }

}
