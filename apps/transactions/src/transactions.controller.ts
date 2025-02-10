import { Controller, Get, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionDto } from './dto/transaction.dto';

@Controller()
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}
  // TODO: Make sure query params are well formated date string!!!

  @Get('transactions')
  getTransactions(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): Promise<TransactionDto> {
    return this.transactionsService.getTransactions(startDate, endDate);
  }
}
