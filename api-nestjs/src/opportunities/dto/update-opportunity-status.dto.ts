
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

import { OpportunityStatus } from '../../../generated/prisma/enums.js';

export class UpdateOpportunityStatusDto {
  @IsEnum(OpportunityStatus)
  status!: OpportunityStatus;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  reason?: string;
}
