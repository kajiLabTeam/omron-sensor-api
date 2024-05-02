import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { getAllArea, getArea, setArea } from './features/area/Usecase/AreaUsecase'
import { getSensor, setSensor } from './features/sensor/Usecase/SensorUsecase'
import { customLogger, settingLogger } from './Utils/logger'
import { get } from 'http'
import { getLogger } from 'log4js'

const app = new Hono()

// ロガーの設定
settingLogger()
app.use(logger(customLogger))

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
