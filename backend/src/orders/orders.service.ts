import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from '../schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async findAll(filters?: any): Promise<Order[]> {
    return this.orderModel.find(filters).exec();
  }

  async findOne(id: string): Promise<Order | null> {
    return this.orderModel.findById(id).exec();
  }

  async findByClient(clientId: string): Promise<Order[]> {
    return this.orderModel.find({ clientId }).exec();
  }

  async create(orderData: any): Promise<Order> {
    const order = new this.orderModel(orderData);
    return order.save();
  }

  async update(id: string, orderData: any): Promise<Order | null> {
    return this.orderModel.findByIdAndUpdate(id, orderData, { new: true }).exec();
  }

  async updateStatus(id: string, status: string): Promise<Order | null> {
    return this.orderModel.findByIdAndUpdate(
      id,
      { 
        status,
        $push: {
          timeline: {
            at: new Date(),
            action: `Статус изменен на ${status}`,
          },
        },
      },
      { new: true }
    ).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.orderModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
