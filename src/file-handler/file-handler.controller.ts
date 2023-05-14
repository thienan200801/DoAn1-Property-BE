import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path = require('path');
import { config } from 'process';
import { FileHandlerService } from './file-handler.service';

@Controller('file-handler')
export class FileHandlerController {
  constructor(
    private fileHandlerService: FileHandlerService,
    private config: ConfigService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('upload-image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/upload/',
        filename: (req, file, cb) => {
          const filename: string =
            path
              .parse(file.originalname)
              .name.replace(/\s/g, '') +
            '-' +
            Date.now();
          const extension: string = path.parse(
            file.originalname,
          ).ext;

          cb(null, `${filename}${extension}`);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(file);
    return {
      ...file,
      link: `${this.config.get(
        'HOST',
      )}/${this.config.get('IMAGE_ENDPOINT')}/${
        file.filename
      }`,
    };
    //   }
  }
}