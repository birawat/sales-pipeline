import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  UseGuards,
  Query,
  Param,
  ParseIntPipe
} from '@nestjs/common';

import { CurrentUser } from '../common/decorators/current-user.decorator.js';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';

import { ListOpportunitiesQueryDto } from './dto/list-opportunities-query.dto.js';
import { CreateOpportunityDto } from './dto/create-opportunity.dto.js';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto.js';
import { UpdateOpportunityStatusDto } from './dto/update-opportunity-status.dto.js';
import { CreateActivityDto } from './dto/create-activity.dto.js';
import { ListActivitiesQueryDto } from './dto/list-activities-query.dto.js';
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

  @Patch(':id')
    @UseGuards(JwtAuthGuard)
    update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateOpportunityDto,
    ) {
    return this.opportunitiesService.update(id, dto);
  }

  
  @Patch(':id/status')
    @UseGuards(JwtAuthGuard)
    updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateOpportunityStatusDto,
    @CurrentUser() user: { id: number },
    ) {
    return this.opportunitiesService.updateStatus(
      id,
      dto,
      user.id,
    );
  }

  
  @Get(':id/status-history')
    @UseGuards(JwtAuthGuard)
    getStatusHistory(
    @Param('id', ParseIntPipe) id: number,
    ) {
    return this.opportunitiesService.getStatusHistory(id);
  }

  
  @Post(':id/activities')
   @UseGuards(JwtAuthGuard)
   createActivity(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateActivityDto,
    @CurrentUser() user: { id: number },
    ) {
    return this.opportunitiesService.createActivity(
      id,
      dto,
      user.id,
    );
  }

  
  @Get(':id/activities')
    @UseGuards(JwtAuthGuard)
    getActivities(
      @Param('id', ParseIntPipe) id: number,
      @Query() query: ListActivitiesQueryDto,
    ) {
      return this.opportunitiesService.getActivities(id, query);
    }
}