import { Document, Schema as MongooseSchema } from 'mongoose';
export type OrderDocument = Order & Document;
export declare class Order {
    clientId: string;
    companyId?: string;
    serviceId: string;
    title: string;
    status: string;
    priority: number;
    brief?: {
        answers?: any;
    };
    estimate?: {
        min?: number;
        max?: number;
        currency?: string;
    };
    assignedTo?: string;
    participants?: string[];
    files?: string[];
    messagesThreadId?: string;
    checklist?: Array<{
        text: string;
        done: boolean;
    }>;
    timeline?: Array<{
        at: Date;
        by: string;
        action: string;
        payload?: any;
    }>;
}
export declare const OrderSchema: MongooseSchema<Order, import("mongoose").Model<Order, any, any, any, Document<unknown, any, Order, any, {}> & Order & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, Document<unknown, {}, import("mongoose").FlatRecord<Order>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Order> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
