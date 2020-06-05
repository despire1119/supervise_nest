import { Controller, Get, Post, Headers, Query, Param, Body } from '@nestjs/common'
import { CaseService } from './case.service'
import { Request } from 'express'

@Controller('case')
export class CaseController {
  constructor(private readonly caseService: CaseService) {}

  @Get()
  getCases(@Headers() headers: Request, @Query() query: Request): any {
    // return this.caseService.getCases()
    console.log(headers, query)
    return { 'cache-control': headers['cache-control'], query: query }
  }

  @Post()
  create(@Param() params: Request): string {
    console.log(params)
    return `create a new case which named ${params['name']}`
  }
}
