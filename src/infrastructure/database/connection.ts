import 'reflect-metadata'
import 'dotenv/config';
import { DataSource } from 'typeorm';

import { Post } from './main/entities/Post';
import { Author } from './main/entities/Author';

let cache = false;

const Database = new DataSource({
  type: 'mysql',
  host: process.env.MAIN_DB_HOST,
  port: Number(process.env.MAIN_DB_PORT),
  username: process.env.MAIN_DB_USERNAME,
  password: process.env.MAIN_DB_PASSWORD,
  database: process.env.MAIN_DB_DATABASE,
  cache: cache,
  synchronize: false,
  entities: [ Post, Author ],
  migrations: [ __dirname + '/src/infrastructure/database/main/migrations/*.ts'],
  migrationsTableName: '_migrations'
})

console.log(__dirname + '/src/database/main/entities/*.ts')

const Manager = Database.manager

async function Initialize () {
  return Database.initialize()
    .then(() => { console.log('[DB] connected') })
    .catch((e: any) => { console.error('[DB] error:', e) })
}

export { Initialize, Database as DataSource, Manager as Database }