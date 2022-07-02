import { PostRepository } from '!maindb/repository/post.repository'
import { CreatePostCase } from './create.post.case'
import { CreatePostHTTPController } from './create.post.http.controller'

const createPostCase = new CreatePostCase(new PostRepository())
const createPostHTTPController = new CreatePostHTTPController(createPostCase)

const CreatePostModule = {
  createPostCase,
  createPostHTTPController
}

export { CreatePostModule, createPostHTTPController }