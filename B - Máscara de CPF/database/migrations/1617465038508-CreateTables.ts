import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTables1617465038508 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "customers",
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
          { name: "credit_limit", type: "numeric" },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "natural_person",
        columns: [
          {
            name: "id_customers",
            type: "numeric",
            isPrimary: true,
          },
          { name: "cpf", type: "char (14)" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("customers");
    await queryRunner.dropTable("natural_person");
  }
}
