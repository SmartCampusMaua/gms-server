import { Body, Controller, Post } from '@nestjs/common';
import { ReservatoryProperties} from './dto/reservatory-properties.dto';
import { ReservatoryService } from './reservatory.service';

@Controller('reservatory')
export class ReservatoryController {
  constructor(private readonly reservatoryService: ReservatoryService) {}

  @Post('add')
  addReservatory(@Body() ReservatoryProperties: ReservatoryProperties) {
    return this.reservatoryService.addReservatoryProperties(ReservatoryProperties.name, ReservatoryProperties.serial_hydrometer_sensor, ReservatoryProperties.serial_water_distance_sensor)
  }
}
