import { Module } from '@nestjs/common';
import { WaterTankController } from './waterTank.controller';
import { WaterTankService } from './waterTank.service';
import { SupabaseService } from 'src/services/supabase.service';

@Module({
  controllers: [WaterTankController],
  providers: [SupabaseService, WaterTankService],
})
export class WaterTankModule {}
