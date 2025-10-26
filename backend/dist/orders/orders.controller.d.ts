import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(status?: string, mine?: string): Promise<import("../schemas/order.schema").Order[]>;
    findOne(id: string): Promise<import("../schemas/order.schema").Order>;
    create(orderData: any, req: any): Promise<import("../schemas/order.schema").Order>;
    update(id: string, orderData: any): Promise<import("../schemas/order.schema").Order>;
    updateStatus(id: string, status: string): Promise<import("../schemas/order.schema").Order>;
    delete(id: string): Promise<boolean>;
}
