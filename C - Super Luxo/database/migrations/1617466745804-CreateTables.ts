import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTables1617466745804 implements MigrationInterface {
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
          { name: "id_providers", type: "numeric" },
          { name: "id_categories", type: "numeric" },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "providers",
        columns: [
          {
            name: "id",
            type: "numeric",
            isPrimary: true,
          },
          { name: "name", type: "character varying (255)" },
          { name: "street", type: "character varying (255)" },
          { name: "city", type: "character varying (255)" },
          { name: "state", type: "char (2)" },
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
          { name: "name", type: "character varying (255)" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
    await queryRunner.dropTable("providers");
    await queryRunner.dropTable("categories");
  }
}
