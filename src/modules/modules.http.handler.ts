import { PostHTTPHandler } from './post/post.http.handle';

import { Router } from 'express';

const router = Router();

router.use(PostHTTPHandler)

export { router as ModulesHTTPHandler }