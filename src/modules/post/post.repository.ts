import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma';

@Injectable()
export class PostRepository {
  constructor(private database: PrismaService) {}

  getByUserId(id: number) {
    return this.database.post.findUnique({ where: { id } });
  }

  getAllPostsById(id: number) {
    return this.database.post.findMany({ where: { id } });
  }
}
