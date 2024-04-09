export type SensorData = {
    id: number;
    time_measured: string;
    area_id: number;
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
    created_at: Date;
    updated_at: Date;
}

export function getHeader(sensorData:SensorData): string {
    return Object.keys(sensorData).join(',');
}

export function toCsv(data: SensorData): string {
    return [
        data.id,
        data.time_measured,
        data.area_id,
        data.temperature,
        data.relative_humidity,
        data.ambient_light,
        data.barometric_pressure,
        data.sound_noise,
        data.eTVOC,
        data.eCO2,
        data.discomfort_index,
        data.heat_stroke,
        data.vibration_information,
        data.si_value,
        data.pga,
        data.seismic_intensity,
        data.temperature_flag,
        data.relative_humidity_flag,
        data.ambient_light_flag,
        data.barometric_pressure_flag,
        data.sound_noise_flag,
        data.etvoc_flag,
        data.eco2_flag,
        data.discomfort_index_flag,
        data.heat_stroke_flag,
        data.si_value_flag,
        data.pga_flag,
        data.seismic_intensity_flag,
        data.created_at,
        data.updated_at,
    ].join(',');
}