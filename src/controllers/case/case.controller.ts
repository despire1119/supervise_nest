import { Controller, Get, Post, Headers, Query, Param, Body, HttpStatus, Res } from '@nestjs/common'
import { CaseService } from '../../services/case/case.service'
import { response } from '../../classes/response'

@Controller('case')
export class CaseController {
  constructor(private readonly caseService: CaseService) {}

  @Get('name')
  getCases(@Headers() headers: {any}, @Query() query: {name: string}): any {
    // return this.caseService.getCases()
    console.log(headers, query)
    return { 'cache-control': headers['cache-control'], query: query }
  }

  @Post('add')
  create(@Body() body: { any }): any {
    // console.log(res.status)
    // return `生成新案件${body.id},名称：${body.name}`
    console.log(body)
    // res.status(HttpStatus.CREATED).send()
    return Object.assign(body, { msg: '新增成功' })
  }
  // @Get('name/any')
  // create(@Query() query: {name: string}): string {
  //   return `create a new case which named ${query.name}`
  // }
}
