import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CaseController } from './case/case.controller'
import { CaseService } from './case/case.service'

@Module({
  imports: [],
  controllers: [AppController, CaseController],
  providers: [AppService, CaseService]
})
export class AppModule {}
