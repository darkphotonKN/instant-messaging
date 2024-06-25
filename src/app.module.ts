import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SendbirdModule } from './sendbird/sendbird.module';

@Module({
  imports: [DatabaseModule, SendbirdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
