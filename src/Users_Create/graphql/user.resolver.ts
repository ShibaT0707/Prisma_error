import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInput } from './user.input';
import { User } from 'src/Users_Create/prisma/user.model';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('input') input: UserInput): Promise<User> {
    return this.userService.createUser(input);
  }
}