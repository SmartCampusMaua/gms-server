import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  const gmsServerPort = configService.get<string>('GMS_SERVER_PORT')!;
  
  await app.listen(gmsServerPort);
}
bootstrap();
