
import { Router, Request, Response } from 'express';

import { createPostHTTPController } from './create.post.module'

const router = Router();

router.post('/post', (request: Request, response: Response) => {
  return createPostHTTPController.create(request, response);
})

export { router as CreatePostHTTPHandler }