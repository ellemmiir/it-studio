import { Controller, Get, Post, Delete, Param, UseGuards, Request, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('files')
@UseGuards(JwtAuthGuard)
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: any, @Request() req) {
    return this.filesService.uploadFile(file, req.user.id);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.filesService.getFile(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.filesService.deleteFile(id);
  }
}
