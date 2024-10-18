import { Module } from '@nestjs/common';
import { ReservatoryController } from './reservatory.controller';
import { ReservatoryService } from './reservatory.service';

@Module({
  imports: [],
  controllers: [ReservatoryController],
  providers: [ReservatoryService],
})
export class ReservatoryModule {}
