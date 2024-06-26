import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { SendbirdService } from 'src/sendbird/sendbird.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigModule],
  exports: [SendbirdService],
  controllers: [UserController],
  providers: [UserService, SendbirdService],
})
export class UserModule {}
