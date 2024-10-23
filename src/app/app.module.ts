import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaterTankModule } from 'src/waterTank/waterTank.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), WaterTankModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
