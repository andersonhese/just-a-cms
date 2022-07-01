import { Request, Response } from 'express';
import { CreatePostCase } from './create-post.case'

export class CreatePostHTTPController {
  constructor (
    private createPostCase: CreatePostCase
  ) {}

  async create (request: Request, response: Response): Promise<Response> {
    const { title, content, status, createdAt, author } = request.body;

    const result: any = await this.createPostCase.execute({
      title, content, status, createdAt, author
    })

    return response.status(201).send(result);
  }
}