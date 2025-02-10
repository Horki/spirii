import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ItemDto } from '../../transactions/src/dto/transaction.dto';
import { AggregateResponseDto } from './dto/aggregate.response.dto';

@Injectable()
export class AggregateService {
  private readonly logger = new Logger(AggregateService.name);
  // Like in CronExpression enum
  private static readonly EVERY_12_SECONDS = '*/12 * * * * *';
  private inMemoryData: Array<ItemDto> = [];

  async getAggregation(userId: string): Promise<AggregateResponseDto> {
    const items = this.inMemoryData.filter((item) => item.userId === userId);
    // This is just for demo purposes, not a real one!
    const payoutAmount = items
      .filter((item) => item.type === 'payout')
      .reduce((acc, curr) => acc + curr.amount, 0);
    const spentAmount = items
      .filter((item) => item.type === 'spent')
      .reduce((acc, curr) => acc + curr.amount, 0);
    const earnedAmount = items
      .filter((item) => item.type === 'earned')
      .reduce((acc, curr) => acc + curr.amount, 0);

    return {
      userId,
      payoutAmount,
      spentAmount,
      earnedAmount,
    };
  }

  // 5 times a minute is every 12 seconds!
  @Cron(AggregateService.EVERY_12_SECONDS)
  handleCron() {
    this.logger.warn('Fetching data from transaction endpoint');
    // TODO: Figure idiomatic way to call transaction endpoint
    fetch(
      'http://localhost:3001/transactions?startDate=2023-02-01 00:00:00&endDate=2023-02-03 00:00:00',
    )
      .then((response) => response.json())
      .then((body) => {
        // Let's pretend this is OK way to collect data ;)
        this.inMemoryData.push(...body['items']);
        this.logger.warn('Data collected successfully!');
      })
      .catch(this.logger.error);
  }
}
