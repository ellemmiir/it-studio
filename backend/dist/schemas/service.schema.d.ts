import { Document, Schema as MongooseSchema } from 'mongoose';
export type ServiceDocument = Service & Document;
export declare class Service {
    slug: string;
    title: string;
    category: string;
    description?: string;
    features?: string[];
    marketPriceRange?: {
        min?: number;
        max?: number;
    };
    priceDump?: {
        min?: number;
        max?: number;
        activeUntil?: Date;
    };
    pricePostDump?: {
        min?: number;
        max?: number;
    };
    options?: Array<{
        key: string;
        title: string;
        type: 'select' | 'number' | 'bool';
        values?: any[];
    }>;
    isActive: boolean;
}
export declare const ServiceSchema: MongooseSchema<Service, import("mongoose").Model<Service, any, any, any, Document<unknown, any, Service, any, {}> & Service & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Service, Document<unknown, {}, import("mongoose").FlatRecord<Service>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Service> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
