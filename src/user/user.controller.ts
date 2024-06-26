import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() { firstName, lastName, profileUrl }) {
    return this.userService.createUser({
      firstName,
      lastName,
      profileUrl,
    });
  }
}
