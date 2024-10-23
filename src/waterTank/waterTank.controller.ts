import { Body, Controller, Get, Post } from '@nestjs/common';
import { WaterTankProperties} from './dto/waterTank-properties.dto';
import { WaterTankService } from './waterTank.service';

@Controller('waterTank')
export class WaterTankController {
  constructor(private readonly waterTankService: WaterTankService) {}
  
  @Post('add')
  addWaterTank(@Body() WaterTankProperties: WaterTankProperties) {
    return this.waterTankService.addWaterTankProperties(WaterTankProperties.name, WaterTankProperties.serial_hydrometer_sensor, WaterTankProperties.serial_water_distance_sensor)
  }

  @Get('get')
  getWaterTank() {
    return this.waterTankService.getWaterTankProperties()
  }
}
