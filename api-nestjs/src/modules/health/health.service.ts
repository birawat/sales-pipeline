import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth(): string {
    return 'Recruitment CRM API is running Healthy! 😊';
  }
}