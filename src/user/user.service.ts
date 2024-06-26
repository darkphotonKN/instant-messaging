import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { SendbirdService } from 'src/sendbird/sendbird.service';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private sendbirdService: SendbirdService,
  ) {}

  async createUser({ firstName, lastName, profileUrl }) {
    // create a new user
    const newUser = this.userRepo.create({
      firstName,
      lastName,
      profileUrl,
    });

    const savedNewUser = await this.userRepo.save(newUser);
    console.log('New user created!', savedNewUser);

    return savedNewUser;
  }
}
