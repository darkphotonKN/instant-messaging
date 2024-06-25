import { Module } from '@nestjs/common';
import { SendbirdController } from './sendbird.controller';
import { SendbirdService } from './sendbird.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [SendbirdController],
  providers: [SendbirdService],
})
export class SendbirdModule {}
