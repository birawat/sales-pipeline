import {
  ArrayMaxSize,
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

import {
  EmploymentType,
  OpportunityPriority,
  OpportunitySourceType,
  WorkplaceType,
} from '../../../generated/prisma/enums.js';

export class CreateOpportunityDto {
  // Core details
  @IsString()
  @MaxLength(200)
  title!: string;

  @IsString()
  @MaxLength(20000)
  description!: string;

  // Client information
  @IsOptional()
  @IsString()
  @MaxLength(200)
  companyName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(150)
  clientContactName?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(254)
  clientContactEmail?: string;

  // Job details
  @IsOptional()
  @IsString()
  @MaxLength(200)
  location?: string;

  @IsOptional()
  @IsEnum(EmploymentType)
  employmentType?: EmploymentType;

  @IsOptional()
  @IsEnum(WorkplaceType)
  workplaceType?: WorkplaceType;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  seniorityLevel?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(60)
  experienceMin?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(60)
  experienceMax?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  salaryMin?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  salaryMax?: number;

  @IsOptional()
  @IsString()
  @MaxLength(3)
  salaryCurrency?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100000)
  openingsCount?: number;

  // Skills and requirements
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(100)
  @IsString({ each: true })
  @MaxLength(200, { each: true })
  requiredSkills?: string[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(100)
  @IsString({ each: true })
  @MaxLength(200, { each: true })
  preferredSkills?: string[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(100)
  @IsString({ each: true })
  @MaxLength(1000, { each: true })
  responsibilities?: string[];

  @IsOptional()
  @IsString()
  @MaxLength(500)
  educationRequirement?: string;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(100)
  @IsString({ each: true })
  @MaxLength(1000, { each: true })
  mustHaveRequirements?: string[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(100)
  @IsString({ each: true })
  @MaxLength(1000, { each: true })
  niceToHaveRequirements?: string[];

  // Source information
  @IsEnum(OpportunitySourceType)
  sourceType!: OpportunitySourceType;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  sourceName?: string;

  @IsOptional()
  @IsUrl({ protocols: ['http', 'https'], require_protocol: true })
  @MaxLength(2048)
  sourceUrl?: string;

  @IsOptional()
  @IsString()
  @MaxLength(10000)
  sourceNotes?: string;

  // Pipeline information
  @IsOptional()
  @IsEnum(OpportunityPriority)
  priority?: OpportunityPriority;

  @IsOptional()
  @IsString()
  @MaxLength(10000)
  qualificationNotes?: string;
}