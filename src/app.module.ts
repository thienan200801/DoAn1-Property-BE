import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';



@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./config/env/${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
})
export class AppModule {}
