import { Injectable } from '@nestjs/common'

@Injectable()
export class CaseService {
  getCases(): string {
    return 'cases'
  }
}
