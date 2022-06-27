import 'reflect-metadata'
import 'dotenv/config';
import { DataSource } from 'typeorm';

let cache = false;

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MAIN_DB_HOST,
  port: Number(process.env.MAIN_DB_PORT),
  username: process.env.MAIN_DB_USERNAME,
  password: process.env.MAIN_DB_PASSWORD,
  database: process.env.MAIN_DB_DATABASE,
  cache: cache,
  synchronize: false,
  entities: [ './src/database/main/entities/*.ts' ],
  migrations: ['./src/database/main/migrations/*.ts'],
  migrationsTableName: '_migrations'
})

export { AppDataSource }