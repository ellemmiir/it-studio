import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
  private settings = {
    branding: {
      companyName: 'IT Studio',
      logo: '',
      primaryColor: '#0066CC',
      secondaryColor: '#00CC66',
    },
    email: {
      smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
      smtpPort: parseInt(process.env.SMTP_PORT || '587'),
      fromAddress: process.env.SMTP_FROM || 'noreply@itstudio.ru',
    },
    security: {
      jwtExpiration: process.env.JWT_EXPIRATION || '1h',
      passwordMinLength: 8,
      require2FA: false,
    },
    features: {
      enableChat: true,
      enableOnlinePayments: false,
      enableTelegramBot: false,
    },
    sla: {
      newOrderResponseTime: 15, // minutes
      discoveryResponseTime: 120, // minutes
      inProgressResponseTime: 240, // minutes
    },
  };

  getSettings() {
    return this.settings;
  }

  updateSettings(newSettings: any) {
    this.settings = { ...this.settings, ...newSettings };
    return this.settings;
  }

  getBranding() {
    return this.settings.branding;
  }

  updateBranding(branding: any) {
    this.settings.branding = { ...this.settings.branding, ...branding };
    return this.settings.branding;
  }
}

