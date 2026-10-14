import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { OpportunitiesModule } from './opportunities/opportunities.module.js';

@Module({
  imports: [HealthModule, PrismaModule, AuthModule, OpportunitiesModule],
})
export class AppModule {}