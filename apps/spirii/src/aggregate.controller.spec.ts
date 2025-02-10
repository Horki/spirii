import { Test, TestingModule } from '@nestjs/testing';
import { AggregateController } from './aggregate.controller';
import { AggregateService } from './aggregate.service';

describe('AggregateController', () => {
  let aggregateController: AggregateController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AggregateController],
      providers: [AggregateService],
    }).compile();

    aggregateController = app.get<AggregateController>(AggregateController);
  });

  describe('getByUserId', () => {
    it('should return aggregated data by user id', async () => {
      expect(await aggregateController.getByUserId('3214')).toEqual({
        userId: '3214',
        payoutAmount: 0,
        spentAmount: 0,
        earnedAmount: 0,
      });
    });
  });
});
