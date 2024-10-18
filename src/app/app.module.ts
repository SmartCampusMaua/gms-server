import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservatoryModule } from 'src/reservatory/reservatory.module';

@Module({
  imports: [ReservatoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
