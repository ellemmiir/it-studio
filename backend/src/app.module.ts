import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ServicesModule } from './services/services.module';
import { OrdersModule } from './orders/orders.module';
import { MessagesModule } from './messages/messages.module';
import { ThreadsModule } from './threads/threads.module';
import { FilesModule } from './files/files.module';
import { InvoicesModule } from './invoices/invoices.module';
import { CompaniesModule } from './companies/companies.module';
import { SettingsModule } from './settings/settings.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://admin:password123@localhost:27017/it_studio?authSource=admin'),
    AuthModule,
    UsersModule,
    ServicesModule,
    OrdersModule,
    MessagesModule,
    ThreadsModule,
    FilesModule,
    InvoicesModule,
    CompaniesModule,
    SettingsModule,
    ReportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
