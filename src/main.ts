import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true});
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Documentação de API - SCE')
    .setDescription('SCE é um sistema de controle de expedição com o objetivo de controlar a saida de notas fiscais, carrinhos e produtos que saem da central de distribuição da tutiplast.')
    .setVersion('1.0')
    .addTag('SCE')
    .build()
  
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-docs', app, document)


  await app.listen(process.env.API_PORT);

}
bootstrap();
