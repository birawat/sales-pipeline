
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsIn,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

import { ActivityType } from '../../../generated/prisma/enums.js';

export class ListActivitiesQueryDto {
  @IsOptional()
  @IsEnum(ActivityType)
  type?: ActivityType;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit = 20;

  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortOrder: 'asc' | 'desc' = 'desc';
}
