import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from '../schemas/order.schema';
import { Invoice, InvoiceDocument } from '../schemas/invoice.schema';
import { Service, ServiceDocument } from '../schemas/service.schema';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(Invoice.name) private invoiceModel: Model<InvoiceDocument>,
    @InjectModel(Service.name) private serviceModel: Model<ServiceDocument>,
  ) {}

  async getOrdersReport(filters?: any) {
    const orders = await this.orderModel.find(filters).exec();
    
    const stats = {
      total: orders.length,
      byStatus: {} as any,
      byPriority: {} as any,
      avgResponseTime: 0,
    };

    orders.forEach(order => {
      stats.byStatus[order.status] = (stats.byStatus[order.status] || 0) + 1;
      stats.byPriority[order.priority] = (stats.byPriority[order.priority] || 0) + 1;
    });

    return stats;
  }

  async getRevenueReport(period?: { from: Date; to: Date }) {
    const filters: any = { status: 'paid' };
    if (period) {
      filters.paidAt = { $gte: period.from, $lte: period.to };
    }

    const invoices = await this.invoiceModel.find(filters).exec();
    
    const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0);
    const totalInvoices = invoices.length;
    const avgInvoice = totalInvoices > 0 ? totalRevenue / totalInvoices : 0;

    return {
      totalRevenue,
      totalInvoices,
      avgInvoice,
      period: period || 'all',
    };
  }

  async getSLAReport() {
    const orders = await this.orderModel.find().exec();
    
    const sla = {
      newOrders: orders.filter(o => o.status === 'new').length,
      inProgress: orders.filter(o => o.status === 'in_progress').length,
      done: orders.filter(o => o.status === 'done').length,
      avgCompletionTime: 0,
    };

    return sla;
  }

  async getServicesReport() {
    const services = await this.serviceModel.find({ isActive: true }).exec();
    const orders = await this.orderModel.find().exec();

    const serviceStats = services.map(service => {
      const serviceOrders = orders.filter(o => String(o.serviceId) === String(service._id));
      return {
        serviceId: service._id,
        serviceName: service.title,
        ordersCount: serviceOrders.length,
        revenue: 0, // можно вычислить из счетов
      };
    });

    return serviceStats;
  }
}

