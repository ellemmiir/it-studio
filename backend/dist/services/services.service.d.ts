import { Model } from 'mongoose';
import { Service, ServiceDocument } from '../schemas/service.schema';
export declare class ServicesService {
    private serviceModel;
    constructor(serviceModel: Model<ServiceDocument>);
    findAll(): Promise<Service[]>;
    findOne(id: string): Promise<Service | null>;
    findBySlug(slug: string): Promise<Service | null>;
    create(serviceData: any): Promise<Service>;
    update(id: string, serviceData: any): Promise<Service | null>;
    delete(id: string): Promise<boolean>;
    calculateEstimate(serviceId: string, options: any): Promise<{
        min: number;
        max: number;
        explanation: string;
    }>;
}
