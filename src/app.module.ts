import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CaseController } from './controllers/case/case.controller'
import { CaseService } from './services/case/case.service'

@Module({
  imports: [],
  controllers: [AppController, CaseController],
  providers: [AppService, CaseService]
})
export class AppModule {}
