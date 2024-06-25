import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const host = configService.get<string>('MYSQL_HOST');
        const port = configService.get<number>('MYSQL_PORT');
        const username = configService.get<string>('MYSQL_USER');
        const password = configService.get<string>('MYSQL_PASSWORD');
        const database = configService.get<string>('MYSQL_DATABASE');

        console.log('MySQL Config:', {
          host,
          port,
          username,
          password,
          database,
        });

        return {
          type: 'mysql',
          host,
          port,
          username,
          password,
          database,
          synchronize: true, // Set to false in production
        };
      },
    }),
  ],
})
export class DatabaseModule {}
