import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private postRepository: PostRepository) {}

  async getPostByUserId(id: number) {
    const post = await this.postRepository.getByUserId(id);
    return post;
  }

  getAllPostsById(id: number) {
    return this.postRepository.getAllPostsById(id);
  }
}
