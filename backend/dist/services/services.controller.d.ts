import { ServicesService } from './services.service';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(): Promise<import("../schemas/service.schema").Service[]>;
    findOne(id: string): Promise<import("../schemas/service.schema").Service>;
    calculate(id: string, options: any): Promise<{
        min: number;
        max: number;
        explanation: string;
    }>;
    create(serviceData: any): Promise<import("../schemas/service.schema").Service>;
    update(id: string, serviceData: any): Promise<import("../schemas/service.schema").Service>;
    delete(id: string): Promise<boolean>;
}
