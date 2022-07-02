import { Router, Request, Response } from 'express';

import { ModulesHTTPHandler } from './modules/modules.http.handler';


const router = Router();

router.use(ModulesHTTPHandler);

router.get('/', async (request: Request, response: Response) => {
  return response.status(201).send({ ok: true });
})

export { router as Router }