import { Controller, Get } from '@nestjs/common';
import { ReservatoryService } from './reservatory.service';

@Controller('reservatory')
export class ReservatoryController {
  constructor(private readonly reservatoryService: ReservatoryService) {}

  @Get('waterTankInfo')
  waterTankInfo() {
    return this.reservatoryService.getWaterTankInfo()
  }
}
