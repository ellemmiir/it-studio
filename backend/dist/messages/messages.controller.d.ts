import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    getByThread(threadId: string, cursor?: string): Promise<import("../schemas/message.schema").Message[]>;
    create(messageData: any): Promise<import("../schemas/message.schema").Message>;
    markAsRead(id: string, userId: string): Promise<import("../schemas/message.schema").Message>;
}
