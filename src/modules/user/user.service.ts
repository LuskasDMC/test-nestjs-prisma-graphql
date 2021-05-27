import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.getAll({ include: { Post: true } });
    return users;
  }
}
