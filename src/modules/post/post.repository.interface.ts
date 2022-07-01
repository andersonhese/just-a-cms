import { Post } from '!mainentities/Post';
import { CreatePostDTO } from './commands/create-post/create-post.dto'

export interface PostRepository {
  create(data: CreatePostDTO): Post;
  save(post: Post): Promise<void>;
}