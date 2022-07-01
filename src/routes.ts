import { Router, Request, Response } from 'express';

import { Database } from '!db/connection';

import { Author } from '!db-main-entities/Author';
import { Post, PostStatusTypes } from '!db-main-entities/Post';

const router = Router();

router.get('/', async (request: Request, response: Response) => {
  return response.status(201).send({ ok: true });
})

// router.get('/', async (request: Request, response: Response) => {

//   let author = await Database.getRepository(Author).findOne({ where: { name: 'John Doe' } })

//   if (!author) {
//     author = await Database.getRepository(Author).save({ name: 'John Doe' })
//   }

//   let post: Post = Database.getRepository(Post).create({
//     title: `New Post ` + new Date().getTime(),
//     content: { items: [ { type: 'text', data: 'Lorem Lorem Lorem' } ] },
//     author: author
//   })
//   post = await Database.getRepository(Post).save(post)

//   post.status = PostStatusTypes.PUBLISHED

//   post = await Database.getRepository(Post).save(post)

//   let authorsPosts = await Database.getRepository(Post).find({ where: { author: { id: author.id } }, relations: [ 'author' ] })

//   return response.status(201).send(authorsPosts);
// })

export { router as Router }