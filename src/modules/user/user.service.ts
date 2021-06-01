import { User } from '.prisma/client';
import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.getAll();
    return users;
  }
}
