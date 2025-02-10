import {
  IsDateString,
  IsNumber,
  IsNumberString,
  IsUUID,
} from 'class-validator';

export type ItemType = 'payout' | 'spent' | 'earned';

export class TransactionDto {
  items: Array<ItemDto>;
  metadata: MetaDto;
}

export class ItemDto {
  @IsUUID()
  id: string;
  @IsNumberString()
  userId: string;
  @IsDateString()
  createdAt: string;
  // TODO: Check by item type
  type: ItemType;
  @IsNumber()
  amount: number;
}

export class MetaDto {
  @IsNumber()
  totalItems: number;
  @IsNumber()
  itemCount: number;
  @IsNumber()
  itemsPerPage: number;
  @IsNumber()
  totalPages: number;
  @IsNumber()
  currentPage: number;
}
