import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Documentação de API - SCE')
  .setDescription('SCE é um sistema de controle de expedição com o objetivo de controlar a saida de notas fiscais, carrinhos e produtos que saem da central de distribuição da tutiplast.')
  .setContact('Tutilabs', '', 'tutilabs@tutiplast.com.br')
  .setVersion('1.0')
  .addServer(`http://localhost:${process.env.API_PORT}`)
  .addServer(`http://185.209.179.253:${process.env.API_PORT}`)
  .addBearerAuth()
  .build();

export { swaggerConfig };
