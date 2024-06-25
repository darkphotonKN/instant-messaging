import { Injectable } from '@nestjs/common';
import SendBirdChat from '@sendbird/chat';
import { OpenChannelModule } from '@sendbird/chat/openChannel';

@Injectable()
export class SendbirdService {
  private readonly sb: SendBirdChat;
  constructor() {
    this.sb = SendBirdChat.init({
      appId: process.env.SENDBIRD_APP_ID,
      modules: [new OpenChannelModule()],
    });
  }

  async createUser(userId: string, nickname?: string) {
    try {
      const user = await this.sb.connect(userId);
      // The user is connected to Sendbird server.
      console.log('User created:', user);
    } catch (err) {
      console.log('Error caught while connecting new user:', err);
    }
  }
}
