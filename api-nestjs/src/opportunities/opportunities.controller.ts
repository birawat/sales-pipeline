import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  Query,
  Param,
  ParseIntPipe
} from '@nestjs/common';

import { CurrentUser } from '../common/decorators/current-user.decorator.js';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';

import { ListOpportunitiesQueryDto } from './dto/list-opportunities-query.dto.js';
import { CreateOpportunityDto } from './dto/create-opportunity.dto.js';
import { OpportunitiesService } from './opportunities.service.js';

@Controller('opportunities')
export class OpportunitiesController {
  constructor(
    private readonly opportunitiesService: OpportunitiesService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() dto: CreateOpportunityDto,
    @CurrentUser() user: { id: number },
  ) {
    return this.opportunitiesService.create(dto, user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Query() query: ListOpportunitiesQueryDto) {
   return this.opportunitiesService.findAll(query);
  }

 @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param('id', ParseIntPipe) id: number) {
    return this.opportunitiesService.findOne(id);
    }
}