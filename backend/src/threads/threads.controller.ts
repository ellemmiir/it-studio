import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('threads')
@UseGuards(JwtAuthGuard)
export class ThreadsController {
  constructor(private readonly threadsService: ThreadsService) {}

  @Get(':ownerType/:ownerId')
  async getOrCreate(
    @Param('ownerType') ownerType: string,
    @Param('ownerId') ownerId: string,
    @Body('participants') participants?: string[],
  ) {
    return this.threadsService.getOrCreate(ownerType, ownerId, participants || []);
  }
}

