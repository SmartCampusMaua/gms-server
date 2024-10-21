import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservatoryService {
  getReservatoryList(){
    return 'Hello World!';
  }

  addReservatoryProperties(name: string, serial_water_distance_sensor: string, serial_hydrometer_sensor: string) {
    console.log(name,serial_hydrometer_sensor, serial_water_distance_sensor)
    return {}
  }
}
