import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as bodyParser from 'body-parser'
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // app.useStaticAssets(`${__dirname}/assets`)
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  // app.use(session({ secret: 'nest is awesome' }))
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept')
    next()
  })
  await app.listen(3000)
}
bootstrap()
