import { Database } from '!db/connection'

import { PostRepository as PostRepositoryProps } from '!modules/post/post.repository.interface';
import { Post } from '!maindb/entities/Post'
import { CreatePostDTO } from '!modules/post/commands/create-post/create.post.dto';
import { Author } from '!mainentities/Author';

export class PostRepository implements PostRepositoryProps {
  constructor (
    protected readonly repository = Database.getRepository(Post)
  ) {}

  create(data: CreatePostDTO): Post {

    const author: Author = { id: '9e6e125c-cd36-4044-8119-08ea5db900ac', name: 'John Doe' }

    return this.repository.create({
      title: data.title,
      content: data.content,
      author: author
    })
  }

  async save(post: Post): Promise<Post> {
    return this.repository.save(post)
  }
}