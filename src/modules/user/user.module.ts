import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma';
import { PostModule } from '../post/post.module';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UserResolver, UserService, UserRepository, PrismaService],
  imports: [PostModule],
})
export class UserModule {}
