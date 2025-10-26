import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll(@Query('status') status?: string, @Query('mine') mine?: string) {
    const filters: any = {};
    if (status) filters.status = status;
    return this.ordersService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Post()
  create(@Body() orderData: any, @Request() req) {
    orderData.clientId = req.user.id;
    return this.ordersService.create(orderData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() orderData: any) {
    return this.ordersService.update(id, orderData);
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.ordersService.updateStatus(id, status);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ordersService.delete(id);
  }
}
