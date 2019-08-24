import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Blog Sample")
    .setDescription("Blog api description")
    .setVersion("1.0")
    .addTag("blog")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(3000);
}
bootstrap();
