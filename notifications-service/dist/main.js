"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const pipes_1 = require("@nestjs/common/pipes");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new pipes_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map