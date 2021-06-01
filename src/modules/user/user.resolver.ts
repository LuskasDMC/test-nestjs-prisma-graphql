import { Logger } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
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
    const post = await this.postService.getAllPostsById(
      id as unknown as number,
    );

    Logger.log('post->', JSON.stringify(post));
    return post;
  }
  // @Query()
  // async author(@Args('id') id: number) {
  //   return this.authorsService.findOneById(id);
  // }

  // @ResolveField()
  // async posts(@Parent() author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
