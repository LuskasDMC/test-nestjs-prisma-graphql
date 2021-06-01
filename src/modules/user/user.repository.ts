import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma';

@Injectable()
export class UserRepository {
  constructor(private database: PrismaService) {}

  getAll() {
    return this.database.user.findMany();
  }
}
