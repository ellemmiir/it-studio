import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('companies')
@UseGuards(JwtAuthGuard)
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(id);
  }

  @Post()
  create(@Body() companyData: any) {
    return this.companiesService.create(companyData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() companyData: any) {
    return this.companiesService.update(id, companyData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.companiesService.delete(id);
  }
}

