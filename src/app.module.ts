import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AdministrativeModule } from './administrative/administrative.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ContactModule } from './contact/contact.module';
import { FileHandlerModule } from './file-handler/file-handler.module';
import { PrismaModule } from './prisma/prisma.module';
import { PropertyModule } from './property/property.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { SellDemandModule } from './buy-demand/buy-demand.module';
import { PostModule } from './post/post.module';
import { DemoModule } from './demo/demo.module';

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
    ContactModule,
    FileHandlerModule,
    AdministrativeModule,
    TagModule,
    PropertyModule,
    SellDemandModule,
    PostModule,
    DemoModule
  ],
})
export class AppModule {}
