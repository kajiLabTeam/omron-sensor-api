import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { DBApi } from './sensor/API/SqlHandler'
import { SensorData } from './sensor/entity/SensorModel'


const app = new Hono()
app.use(logger())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/db_test', async (c) => {
  const db = new DBApi()
  const result = await db.getSensorModel()

  const json = JSON.stringify(result)
  return c.json(json)
})

app.post('/db_test', async (c) => {
  const db = new DBApi()
  const data:SensorData = {
    id: 2,
    time_measured: '2021-08-01 00:00:00',
    area: 'sysken',
    temperature: 25.0,
    relative_humidity: 50.0,
    ambient_light: 100.0,
    barometric_pressure: 1013.0,
    sound_noise: 30.0,
    eTVOC: 100.0,
    eCO2: 400.0,
    discomfort_index: 70.0,
    heat_stroke: 30.0,
    vibration_information: 0,
    si_value: 0,
    pga: 0,
    seismic_intensity: 0,
    temperature_flag: 0,
    relative_humidity_flag: 0,
    ambient_light_flag: 0,
    barometric_pressure_flag: 0,
    sound_noise_flag: 0,
    etvoc_flag: 0,
    eco2_flag: 0,
    discomfort_index_flag: 0,
    heat_stroke_flag: 0,
    si_value_flag: 0,
    pga_flag: 0,
    seismic_intensity_flag: 0,
    created_at: new Date(),
    updated_at: new Date()
  }
  const created_at = new Date(data.created_at); // Convert 'created_at' from string to Date
  data.created_at = created_at;

  const result = await db.setSensorModel(data);

  const json = JSON.stringify(result);
  return c.json(json)
})

const port = 3000
console.log(`Server is running on port ${port}`)
serve({
  fetch: app.fetch,
  port
})
