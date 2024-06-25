import { Body, Controller, Post } from '@nestjs/common';
import { SendbirdService } from './sendbird.service';

@Controller('sendbird')
export class SendbirdController {
  constructor(private readonly sendbirdService: SendbirdService) {}

  @Post('create')
  async createUser(@Body() { userId, nickname, profileUrl }) {
    return this.sendbirdService.createUser(userId, nickname, profileUrl);
  }
}
