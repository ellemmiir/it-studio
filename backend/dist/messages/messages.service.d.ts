import { Model } from 'mongoose';
import { Message, MessageDocument } from '../schemas/message.schema';
import { Thread, ThreadDocument } from '../schemas/thread.schema';
export declare class MessagesService {
    private messageModel;
    private threadModel;
    constructor(messageModel: Model<MessageDocument>, threadModel: Model<ThreadDocument>);
    getOrCreateThread(ownerType: string, ownerId: string, participants: string[]): Promise<Thread>;
    getMessagesByThread(threadId: string, cursor?: string): Promise<Message[]>;
    create(messageData: any): Promise<Message>;
    markAsRead(messageId: string, userId: string): Promise<Message | null>;
}
