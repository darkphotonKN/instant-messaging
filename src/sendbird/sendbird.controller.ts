import { Controller } from '@nestjs/common';
import { SendbirdService } from './sendbird.service';

@Controller()
export class SendbirdController {
  constructor(private readonly sendbirdService: SendbirdService) {}
}
