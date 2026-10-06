import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import * as dotenv from 'dotenv';




async function bootstrap() {
  dotenv.config();


  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument
  });

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: ['GET,POST'], 
    credentials: true,
    allowedHeaders: ['Content-Type, Authorization'], 
  });

  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
