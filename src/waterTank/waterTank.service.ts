import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { SupabaseService } from 'src/services/supabase.service';

@Injectable()
export class WaterTankService {
  constructor(private supabaseClient: SupabaseService) {}

  private supabase = this.supabaseClient.getSupabase();

  async addWaterTankProperties(name: string, serial_water_distance_sensor: string, serial_hydrometer_sensor: string) {
    try {
      const { data, error } = await this.supabase
        .from("water_tanks")
        .upsert({
          name: name,
          serial_water_distance_sensor: serial_water_distance_sensor,
          serial_hydrometer_sensor: serial_hydrometer_sensor
        })
        .select();

      if (error) {
        throw new HttpException(
          `Failed to add or update water tank properties: ${error.message}`,
          HttpStatus.BAD_REQUEST
        );
      }

      return { data };
    } catch (err) {
      console.error('Error in addWaterTankProperties:', err);
      throw new HttpException(
        'Internal server error while processing the request',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getWaterTankProperties() {
    try {
      const { data, error } = await this.supabase
        .from("water_tanks")
        .select();

      if (error) {
        throw new HttpException(
          `Failed to retrieve water tank properties: ${error.message}`,
          HttpStatus.BAD_REQUEST
        );
      }

      return { data };
    } catch (err) {
      console.error('Error in getWaterTankProperties:', err);
      throw new HttpException(
        'Internal server error while fetching water tank properties',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
