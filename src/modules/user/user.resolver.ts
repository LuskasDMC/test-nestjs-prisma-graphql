import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../../graphql';
import { PostService } from '../post/post.service';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private userService: UserService,
    private postService: PostService,
  ) {}

  @Query()
  async users() {
    const users = this.userService.getAllUsers();
    return users;
  }

  @ResolveField()
  async posts(@Parent() users: User) {
    const { id } = users;
    const post = await this.postService.getAllPostsById(id);
    return post;
  }

  @Mutation()
  async createUser(
    @Args('name') name: string,
    @Args('age') age: number,
    @Args('weight') weight: number,
  ) {
    
  }
}
