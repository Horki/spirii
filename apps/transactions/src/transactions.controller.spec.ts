import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

describe('TransactionsController', () => {
  let transactionsController: TransactionsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [TransactionsService],
    }).compile();

    transactionsController = app.get<TransactionsController>(
      TransactionsController,
    );
  });

  describe('getTransactions', () => {
    it('should generate 10 random items', async () => {
      expect(
        await transactionsController.getTransactions(
          '2023-02-01 00:00:00',
          '2023-02-01 00:00:00',
        ),
      ).toEqual(
        expect.objectContaining({
          // figure how to test items!
          metadata: {
            totalItems: 1200,
            itemCount: 10,
            itemsPerPage: 10,
            currentPage: 1,
            totalPages: 400,
          },
        }),
      );
    });
  });
});
