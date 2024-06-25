import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import SendBirdChat from '@sendbird/chat';
import { OpenChannelModule } from '@sendbird/chat/openChannel';
import axios from 'axios';

@Injectable()
export class SendbirdService {
  private readonly sb: SendBirdChat;
  constructor(private configService: ConfigService) {
    this.sb = SendBirdChat.init({
      appId: configService.get<string>('SENDBIRD_APP_ID'),
      modules: [new OpenChannelModule()],
    });
  }

  async createUser(userId: string, nickname: string, profileUrl: string) {
    try {
      // const user = await this.sb.connect(userId);
      // The user is connected to Sendbird server.

      const sendbirdApiToken =
        this.configService.get<string>('SENDBIRD_API_TOKEN');

      const headers = {
        'Content-Type': 'application/json; charset=utf8',
        'Api-Token': sendbirdApiToken,
      };

      // use v3 sdk to create a user
      const sendbirdSDKEndpoint =
        this.configService.get<string>('SENDBIRD_V3_SDK');
      const { data } = await axios.post(
        `${sendbirdSDKEndpoint}/users`,
        {
          user_id: userId,
          nickname,
          profile_url: profileUrl,
        },
        { headers },
      );

      return data;
      console.log('SendBird sdk user creation response:', data);
    } catch (err) {
      console.log('Error caught while connecting new user:', err);
    }
  }
}
