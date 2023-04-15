import {
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DBURI,
  NODE_ENV,
  PORT,
} from './shared/constant';

async function bootstrap() {
  const logger = new Logger('APP BOOSTRAP');
  const app = await NestFactory.create(
    AppModule,
    { cors: true },
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(PORT, () => {
    logger.log(
      `App is listening in port: ${PORT}`,
    );
    logger.log(`NODE ENV: ${NODE_ENV}`);
    logger.log(`DATABASE URL: ${DBURI}`);
  });
}
bootstrap();
