"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const constant_1 = require("./shared/constant");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const logger = new common_1.Logger('APP BOOSTRAP');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(constant_1.PORT, () => {
        logger.log(`App is listening in port: ${constant_1.PORT}`);
        logger.log(`NODE ENV: ${constant_1.NODE_ENV}`);
        logger.log(`DATABASE URL: ${constant_1.DBURI}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map