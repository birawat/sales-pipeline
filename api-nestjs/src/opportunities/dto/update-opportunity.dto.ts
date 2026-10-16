
import { PartialType } from '@nestjs/mapped-types';
import { CreateOpportunityDto } from './create-opportunity.dto.js';

export class UpdateOpportunityDto extends PartialType(
  CreateOpportunityDto,
) {}
