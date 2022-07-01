import { PostStatusTypes } from '../../interfaces/post-status.interface'

export interface CreatePostDTO {
  title: string;
  content: object;
  status: PostStatusTypes;
  createdAt: Date;
  author: string;
}