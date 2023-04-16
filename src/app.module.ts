import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AdministrativeModule } from './administrative/administrative.module';
import { SellDemandModule } from './buy-demand/buy-demand.module';


@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./config/env/${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    AdministrativeModule,
    SellDemandModule,
  ],
})
export class AppModule {}
