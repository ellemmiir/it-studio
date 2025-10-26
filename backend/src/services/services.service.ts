import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service, ServiceDocument } from '../schemas/service.schema';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service.name) private serviceModel: Model<ServiceDocument>,
  ) {}

  async findAll(): Promise<Service[]> {
    return this.serviceModel.find({ isActive: true }).exec();
  }

  async findOne(id: string): Promise<Service | null> {
    return this.serviceModel.findById(id).exec();
  }

  async findBySlug(slug: string): Promise<Service | null> {
    return this.serviceModel.findOne({ slug }).exec();
  }

  async create(serviceData: any): Promise<Service> {
    const service = new this.serviceModel(serviceData);
    return service.save();
  }

  async update(id: string, serviceData: any): Promise<Service | null> {
    return this.serviceModel.findByIdAndUpdate(id, serviceData, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.serviceModel.findByIdAndDelete(id).exec();
    return !!result;
  }

  async calculateEstimate(serviceId: string, options: any): Promise<{ min: number; max: number; explanation: string }> {
    const service = await this.findOne(serviceId);
    if (!service) {
      throw new Error('Service not found');
    }
    
    const now = new Date();
    const isDumpActive = service.priceDump && service.priceDump.activeUntil && new Date(service.priceDump.activeUntil) > now;
    
    const price = isDumpActive && service.priceDump 
      ? service.priceDump 
      : service.pricePostDump || service.marketPriceRange;
    
    return {
      min: price?.min || 0,
      max: price?.max || 0,
      explanation: isDumpActive 
        ? `Демпинговая цена действует до ${service.priceDump?.activeUntil}` 
        : 'Обычная цена',
    };
  }
}
