import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma';

@Injectable()
export class UserRepository {
  constructor(private database: PrismaService) {}

  getAll(options?: Prisma.UserFindManyArgs) {
    return this.database.user.findMany(options);
  }
}
