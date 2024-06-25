import { Body, Controller, Post } from '@nestjs/common';
import { SendbirdService } from './sendbird.service';

@Controller('/chat')
export class SendbirdController {
  constructor(private readonly sendbirdService: SendbirdService) {}

  @Post('create')
  async createUser(@Body() { userId }) {
    this.sendbirdService.createUser(userId);
  }
}
