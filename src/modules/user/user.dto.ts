import { MinLength } from 'class-validator';
import { User } from '../../graphql';

export class CreateUserInput extends User {
  @MinLength()
  name: string;
}
