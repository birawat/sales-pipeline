import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module.js';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';
import { PrismaModule } from '../prisma/prisma.module.js';

import { OpportunitiesController } from './opportunities.controller.js';
import { OpportunitiesService } from './opportunities.service.js';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [OpportunitiesController],
  providers: [OpportunitiesService, JwtAuthGuard],
})
export class OpportunitiesModule {}