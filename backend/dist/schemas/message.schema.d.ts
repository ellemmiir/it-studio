import { Document } from 'mongoose';
export type MessageDocument = Message & Document;
export declare class Message {
    threadId: string;
    orderId?: string;
    fromUserId: string;
    toUserId?: string;
    type: string;
    text?: string;
    files?: string[];
    meta?: {
        tags?: string[];
        quotedMessageId?: string;
    };
    readBy: string[];
}
export declare const MessageSchema: import("mongoose").Schema<Message, import("mongoose").Model<Message, any, any, any, Document<unknown, any, Message, any, {}> & Message & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Message, Document<unknown, {}, import("mongoose").FlatRecord<Message>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Message> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
