import { Module } from '@nestjs/common';
import { SendbirdController } from './sendbird.controller';
import { SendbirdService } from './sendbird.service';

@Module({
  controllers: [SendbirdController],
  providers: [SendbirdService],
})
export class SendbirdModule {}
