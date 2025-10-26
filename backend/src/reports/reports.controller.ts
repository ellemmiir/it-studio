import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('orders')
  getOrdersReport(@Query('status') status?: string) {
    const filters: any = {};
    if (status) filters.status = status;
    return this.reportsService.getOrdersReport(filters);
  }

  @Get('revenue')
  getRevenueReport(@Query('from') from?: string, @Query('to') to?: string) {
    const period = from && to ? { from: new Date(from), to: new Date(to) } : undefined;
    return this.reportsService.getRevenueReport(period);
  }

  @Get('sla')
  getSLAReport() {
    return this.reportsService.getSLAReport();
  }

  @Get('services')
  getServicesReport() {
    return this.reportsService.getServicesReport();
  }
}

