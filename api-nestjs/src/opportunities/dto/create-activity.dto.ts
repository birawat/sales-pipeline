
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

import { ActivityType } from '../../../generated/prisma/enums.js';

export class CreateActivityDto {
  @IsEnum(ActivityType)
  type!: ActivityType;

  @IsString()
  @MinLength(1)
  @MaxLength(200)
  summary!: string;

  @IsOptional()
  @IsString()
  @MaxLength(10000)
  details?: string;

  @IsOptional()
  @IsString()
  occurredAt?: string;
}
