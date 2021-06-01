import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/prisma';
import { PostRepository } from './post.repository';
import { PostService } from './post.service';

@Module({
  providers: [PrismaService, PostRepository, PostService],
  exports: [PostService],
})
export class PostModule {}
