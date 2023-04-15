/// <reference types="multer" />
/// <reference types="node" />
/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
import { FileHandlerService } from './file-handler.service';
export declare class FileHandlerController {
    private fileHandlerService;
    private config;
    constructor(fileHandlerService: FileHandlerService, config: ConfigService);
    uploadFile(file: Express.Multer.File): {
        link: string;
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        size: number;
        stream: import("stream").Readable;
        destination: string;
        filename: string;
        path: string;
        buffer: Buffer;
    };
}
