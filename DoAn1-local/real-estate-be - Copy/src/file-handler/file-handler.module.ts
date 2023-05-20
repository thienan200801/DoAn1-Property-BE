import { Module } from '@nestjs/common';
import { FileHandlerController } from './file-handler.controller';
import { FileHandlerService } from './file-handler.service';

@Module({
  controllers: [FileHandlerController],
  providers: [FileHandlerService]
})
export class FileHandlerModule {}
