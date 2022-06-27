import 'reflect-metadata'
import 'dotenv/config';
import { AppDataSource } from './database/connection';
import { App } from './app';

(async () => {

  await AppDataSource.initialize()
    .then(() => { console.log('[DB] connected') })
    .catch((e: any) => { console.error('[DB] error:', e) })

  App.listen(process.env.SERVER_PORT, () => {
    console.log(`[CMS] listening (https://localhost:${process.env.SERVER_PORT})`);
  });

})()