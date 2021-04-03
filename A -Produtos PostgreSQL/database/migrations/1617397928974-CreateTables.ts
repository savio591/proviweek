import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTables1617397928974 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "numeric",
            isPrimary: true,
          },
          { name: "name", type: "varchar" },
          { name: "amount", type: "numeric" },
          { name: "price", type: "numeric" },
          { name: "id_categories", type: "numeric" },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          {
            name: "id",
            type: "numeric",
            isPrimary: true,
          },
          { name: "name", type: "varchar" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
    await queryRunner.dropTable("categories");
  }
}
