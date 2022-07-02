import { CreatePostDTO } from './create.post.dto'
import { PostRepository } from '../../post.repository.interface'

export class CreatePostCase {

  constructor (
    private postRepository: PostRepository
  ) {}

  async execute (data: CreatePostDTO) {

    const nPost = this.postRepository.create(data);
    const post = await this.postRepository.save(nPost);

    return post;
  }

}