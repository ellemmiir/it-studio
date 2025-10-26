"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.setGlobalPrefix('api/v1');
        app.enableCors({
            origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
            credentials: true,
        });
        const port = process.env.PORT || 3001;
        await app.listen(port);
        console.log(`🚀 Application is running on: http://localhost:${port}/api/v1`);
    }
    catch (error) {
        console.error('Failed to start application:', error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map