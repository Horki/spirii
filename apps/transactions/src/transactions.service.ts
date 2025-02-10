import { Injectable } from '@nestjs/common';
import { ItemDto, ItemType, TransactionDto } from './dto/transaction.dto';
import { faker } from '@faker-js/faker';

@Injectable()
export class TransactionsService {
  async getTransactions(
    startDate: string,
    endDate: string,
  ): Promise<TransactionDto> {
    const totalItems: number = 10;

    return {
      items: TransactionsService.generateItems(totalItems, {
        from: startDate,
        to: endDate,
      }),
      metadata: {
        totalItems: 1_200,
        itemCount: totalItems,
        itemsPerPage: totalItems,
        currentPage: 1,
        totalPages: 400,
      },
    };
  }

  private static generateItems(
    total: number,
    { from, to }: { from: string; to: string },
  ): Array<ItemDto> {
    return Array.from({ length: total }, () => ({
      id: faker.string.uuid(),
      userId: `${faker.number.int()}`,
      createdAt: faker.date.between({ from, to }).toISOString(),
      type: faker.helpers.arrayElement<ItemType>(['payout', 'spent', 'earned']),
      amount: faker.number.int({ min: 1, max: 500 }),
    }));
  }
}
