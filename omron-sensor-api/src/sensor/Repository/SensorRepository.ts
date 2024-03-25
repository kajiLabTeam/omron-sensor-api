import { DBApi } from '../API/DBApi';
import { SensorData } from '../entity/SensorModel';

type OutputSensorData = {
    id: number;
    time_measured: string;
    area: string;
    temperature: number;
    relative_humidity: number;
    ambient_light: number;
    barometric_pressure: number;
    sound_noise: number;
    eTVOC: number;
    eCO2: number;
    discomfort_index: number;
    heat_stroke: number;
    vibration_information: number;
    si_value: number;
    pga: number;
    seismic_intensity: number;
    date: Date;
}

export type InputSensorData = {
    time_measured: string;
    area: string;
    temperature: number;
    relative_humidity: number;
    ambient_light: number;
    barometric_pressure: number;
    sound_noise: number;
    eTVOC: number;
    eCO2: number;
    discomfort_index: number;
    heat_stroke: number;
    vibration_information: number;
    si_value: number;
    pga: number;
    seismic_intensity: number;
    temperature_flag: number;
    relative_humidity_flag: number;
    ambient_light_flag: number;
    barometric_pressure_flag: number;
    sound_noise_flag: number;
    etvoc_flag: number;
    eco2_flag: number;
    discomfort_index_flag: number;
    heat_stroke_flag: number;
    si_value_flag: number;
    pga_flag: number;
    seismic_intensity_flag: number;
}

export class SensorRepository {

    DBApi: DBApi = new DBApi();

    async getSensorModel(area: string = '',
    startInclusive: Date = new Date(0), 
    endExclusive: Date = new Date(),
    count: number = 100
    ): Promise<OutputSensorData[]>{

        const result = await this.DBApi.getSensorModel(area, startInclusive, endExclusive);

        return result.map((data) => {
            return {
                id: data.id,
                time_measured: data.time_measured,
                area: data.area,
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
                date: new Date(data.time_measured)
            }
        });
    }

    async setSensorModel(data: InputSensorData): Promise<SensorData> {

        const sensorData: SensorData = {
            id: 0,
            time_measured: data.time_measured,
            area: data.area,
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
            created_at: new Date(),
            updated_at: new Date()
        }

        const result = await this.DBApi.setSensorModel(sensorData);

        return result;
    }
}