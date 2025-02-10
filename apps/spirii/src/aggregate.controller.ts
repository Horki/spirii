import { Controller, Get, Query } from '@nestjs/common';
import { AggregateService } from './aggregate.service';
import { AggregateResponseDto } from './dto/aggregate.response.dto';

@Controller()
export class AggregateController {
  constructor(private readonly appService: AggregateService) {}

  @Get('aggregates')
  getByUserId(@Query('userId') userId: string): Promise<AggregateResponseDto> {
    return this.appService.getAggregation(userId);
  }
}
