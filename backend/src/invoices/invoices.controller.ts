import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('invoices')
@UseGuards(JwtAuthGuard)
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  findAll(@Query('orderId') orderId?: string) {
    const filters: any = {};
    if (orderId) filters.orderId = orderId;
    return this.invoicesService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoicesService.findOne(id);
  }

  @Post()
  create(@Body() invoiceData: any) {
    return this.invoicesService.create(invoiceData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() invoiceData: any) {
    return this.invoicesService.update(id, invoiceData);
  }

  @Put(':id/issue')
  issue(@Param('id') id: string) {
    return this.invoicesService.issue(id);
  }

  @Put(':id/paid')
  markAsPaid(@Param('id') id: string) {
    return this.invoicesService.markAsPaid(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.invoicesService.delete(id);
  }
}
