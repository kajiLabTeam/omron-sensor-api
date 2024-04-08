import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { DBApi } from './features/sensor/API/DBApi'
import { SensorData } from './features/sensor/entity/SensorModel'
import { InputSensorData, SensorRepository } from './features/sensor/Repository/SensorRepository'
import { jsFriendlyJSONStringify } from './Utils/jsonExport'


const app = new Hono()
app.use(logger())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/get/sensor', async (c) => {
  const sensorRepository = new SensorRepository()

  const result = await sensorRepository.getSensorModel(
    c.req.query("area"),
    new Date(c.req.query("start") || 0),
    new Date(c.req.query("end") ?? new Date()),
    parseInt(c.req.query("count") || "100")
  )
  return c.text(JSON.stringify(result))
})

app.post('/set/sensor', async (c) => {

  const sensorRepository = new SensorRepository()
  const body = await c.req.json()

  const data: InputSensorData = {
    time_measured: body.time_measured,
    area: body.area,
    temperature: body.temperature,
    relative_humidity: body.relative_humidity,
    ambient_light: body.ambient_light,
    barometric_pressure: body.barometric_pressure,
    sound_noise: body.sound_noise,
    eTVOC: body.eTVOC,
    eCO2: body.eCO2,
    discomfort_index: body.discomfort_index,
    heat_stroke: body.heat_stroke,
    vibration_information: body.vibration_information,
    si_value: body.si_value,
    pga: body.pga,
    seismic_intensity: body.seismic_intensity,
    temperature_flag: body.temperature_flag,
    relative_humidity_flag: body.relative_humidity_flag,
    ambient_light_flag: body.ambient_light_flag,
    barometric_pressure_flag: body.barometric_pressure_flag,
    sound_noise_flag: body.sound_noise_flag,
    etvoc_flag: body.etvoc_flag,
    eco2_flag: body.eco2_flag,
    discomfort_index_flag: body.discomfort_index_flag,
    heat_stroke_flag: body.heat_stroke_flag,
    si_value_flag: body.si_value_flag,
    pga_flag: body.pga_flag,
    seismic_intensity_flag: body.seismic_intensity_flag,
  }

  const result = await sensorRepository.setSensorModel(data)
  return c.text(JSON.stringify(result))
})

const port = 3000
console.log(`Server is running on port ${port}`)
serve({
  fetch: app.fetch,
  port
})
