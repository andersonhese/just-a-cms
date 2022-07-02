import { CreatePostHTTPHandler } from './commands/create-post/create.post.http.handler'

import { Router } from 'express';

const router = Router();

router.use(CreatePostHTTPHandler)

export { router as PostHTTPHandler }