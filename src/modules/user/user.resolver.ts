import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  async users() {
    const users = this.userService.getAllUsers();
    return users;
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
