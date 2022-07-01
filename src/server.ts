import 'reflect-metadata';
import 'dotenv/config';

import { Initialize } from './infrastructure/database/connection';
import { App } from './app';

(async () => {

  await Initialize()

  App.listen(process.env.SERVER_PORT, () => {
    console.log(`[CMS] listening (https://localhost:${process.env.SERVER_PORT})`);
  });

})()