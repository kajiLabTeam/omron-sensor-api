import { PrismaClient } from '@prisma/client'
import { SensorData } from '../entity/SensorModel';

export class DBApi {

    private prisma = new PrismaClient();

    getAllSensorModel(): Promise<SensorData[]> {
        return new Promise((resolve, reject) => {
            this.prisma.sensor_data.findMany().then((result: SensorData[]) => { // Specify the type of 'result' as 'SensorData[]'
                resolve(result);
            });
        });
    }

    getSensorModel(
        area: string,
        startInclusive: Date, 
        endExclusive: Date,
        count: number
    ): Promise<SensorData[]> {
        return new Promise((resolve, reject) => {
            this.prisma.sensor_data.findMany({
                where: {
                    ...(area !== '' && { area: area }),
                    created_at: {
                        gte: startInclusive.toISOString(),
                        lt: endExclusive.toISOString()
                    }
                },
                take: count
            }).then((result: SensorData[]) => {
                resolve(result);
            });
        });
    }

    setSensorModel(data: SensorData): Promise<SensorData> {
        return new Promise((resolve, reject) => {
            this.prisma.sensor_data.create({
                data: {
                    // id is removed here because it should be auto-generated
                    time_measured: data.time_measured,
                    area_id: data.area_id,
                    temperature: data.temperature,
                    relative_humidity: data.relative_humidity,
                    ambient_light: data.ambient_light,
                    barometric_pressure: data.barometric_pressure,
                    sound_noise: data.sound_noise,
                    eTVOC: data.eTVOC,
                    eCO2: data.eCO2,
                    discomfort_index: data.discomfort_index,
                    heat_stroke: data.heat_stroke,
                    vibration_information: data.vibration_information,
                    si_value: data.si_value,
                    pga: data.pga,
                    seismic_intensity: data.seismic_intensity,
                    temperature_flag: data.temperature_flag,
                    relative_humidity_flag: data.relative_humidity_flag,
                    ambient_light_flag: data.ambient_light_flag,
                    barometric_pressure_flag: data.barometric_pressure_flag,
                    sound_noise_flag: data.sound_noise_flag,
                    etvoc_flag: data.etvoc_flag,
                    eco2_flag: data.eco2_flag,
                    discomfort_index_flag: data.discomfort_index_flag,
                    heat_stroke_flag: data.heat_stroke_flag,
                    si_value_flag: data.si_value_flag,
                    pga_flag: data.pga_flag,
                    seismic_intensity_flag: data.seismic_intensity_flag,
                    created_at: data.created_at,
                    updated_at: data.updated_at
                }
            }).then((result: SensorData) => {
                resolve(result);
            });
        });
    }
}