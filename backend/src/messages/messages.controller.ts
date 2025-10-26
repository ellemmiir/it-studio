import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('messages')
@UseGuards(JwtAuthGuard)
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get('thread/:threadId')
  getByThread(@Param('threadId') threadId: string, @Query('cursor') cursor?: string) {
    return this.messagesService.getMessagesByThread(threadId, cursor);
  }

  @Post()
  create(@Body() messageData: any) {
    return this.messagesService.create(messageData);
  }

  @Post(':id/read')
  markAsRead(@Param('id') id: string, @Body('userId') userId: string) {
    return this.messagesService.markAsRead(id, userId);
  }
}
