import { IsNumber, IsString } from 'class-validator';

export class AggregateResponseDto {
  @IsString()
  userId: string;
  @IsNumber()
  payoutAmount: number;
  @IsNumber()
  spentAmount: number;
  @IsNumber()
  earnedAmount: number;
}
