import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { getAllArea, getArea, setArea } from './features/area/Usecaes/AreaUsecase'
import { getSensor, setSensor } from './features/sensor/Usecase/SensorUsecase'


const app = new Hono()
app.use(logger())

/**
 * テストで書かれたルート
 */
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

/**
 * センサーデータを取得する
 */
app.get('/get/sensor', getSensor)
app.post('/set/sensor', setSensor)

/**
 * エリアデータを取得する
 */
app.get('/get/area', getArea)
app.get('/get/area/all', getAllArea)
app.post('/set/area', setArea)

const port = 3000
console.log(`Server is running on port ${port}`)
serve({
  fetch: app.fetch,
  port
})
