import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('settings')
@UseGuards(JwtAuthGuard)
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  getSettings() {
    return this.settingsService.getSettings();
  }

  @Put()
  updateSettings(@Body() settings: any) {
    return this.settingsService.updateSettings(settings);
  }

  @Get('branding')
  getBranding() {
    return this.settingsService.getBranding();
  }

  @Put('branding')
  updateBranding(@Body() branding: any) {
    return this.settingsService.updateBranding(branding);
  }
}

