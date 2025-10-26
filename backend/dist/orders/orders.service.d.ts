import { Model } from 'mongoose';
import { Order, OrderDocument } from '../schemas/order.schema';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<OrderDocument>);
    findAll(filters?: any): Promise<Order[]>;
    findOne(id: string): Promise<Order | null>;
    findByClient(clientId: string): Promise<Order[]>;
    create(orderData: any): Promise<Order>;
    update(id: string, orderData: any): Promise<Order | null>;
    updateStatus(id: string, status: string): Promise<Order | null>;
    delete(id: string): Promise<boolean>;
}
