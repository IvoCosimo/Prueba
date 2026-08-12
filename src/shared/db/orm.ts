import { MikroORM } from "@mikro-orm/mysql";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";

export const orm = await MikroORM.init({
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    dbName: 'club_gestion_socios',
    clientUrl: 'mysql://dsw:dsw@localhost:3306/club_gestion_socios',
    highlighter: new SqlHighlighter(),
    debug: true,
    schemaGenerator: { //never in production
        disableForeignKeys: true,
        createForeignKeyConstraints: true,
        ignoreSchema: [],
    }
})


export const syncSchema = async () => {
  const generator = orm.schema
  /*   
  await generator.drop()
  await generator.create()
  */
  await generator.update()
}