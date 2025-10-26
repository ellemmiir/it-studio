import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice, InvoiceDocument } from '../schemas/invoice.schema';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<InvoiceDocument>,
  ) {}

  async findAll(filters?: any): Promise<Invoice[]> {
    return this.invoiceModel.find(filters).exec();
  }

  async findOne(id: string): Promise<Invoice | null> {
    return this.invoiceModel.findById(id).exec();
  }

  async findByOrder(orderId: string): Promise<Invoice[]> {
    return this.invoiceModel.find({ orderId }).exec();
  }

  async create(invoiceData: any): Promise<Invoice> {
    // Генерируем номер счета
    const count = await this.invoiceModel.countDocuments().exec();
    invoiceData.number = `INV-${String(count + 1).padStart(6, '0')}`;
    
    const invoice = new this.invoiceModel(invoiceData);
    return invoice.save();
  }

  async update(id: string, invoiceData: any): Promise<Invoice | null> {
    return this.invoiceModel.findByIdAndUpdate(id, invoiceData, { new: true }).exec();
  }

  async issue(id: string): Promise<Invoice | null> {
    return this.invoiceModel.findByIdAndUpdate(
      id,
      { status: 'issued', issuedAt: new Date() },
      { new: true }
    ).exec();
  }

  async markAsPaid(id: string): Promise<Invoice | null> {
    return this.invoiceModel.findByIdAndUpdate(
      id,
      { status: 'paid', paidAt: new Date() },
      { new: true }
    ).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.invoiceModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
