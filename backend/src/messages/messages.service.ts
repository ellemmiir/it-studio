import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from '../schemas/message.schema';
import { Thread, ThreadDocument } from '../schemas/thread.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
    @InjectModel(Thread.name) private threadModel: Model<ThreadDocument>,
  ) {}

  async getOrCreateThread(ownerType: string, ownerId: string, participants: string[]): Promise<Thread> {
    let thread = await this.threadModel.findOne({ ownerType, ownerId }).exec();
    if (!thread) {
      thread = new this.threadModel({ ownerType, ownerId, participants });
      await thread.save();
    }
    return thread;
  }

  async getMessagesByThread(threadId: string, cursor?: string): Promise<Message[]> {
    const query: any = { threadId };
    if (cursor) {
      query._id = { $gt: cursor };
    }
    return this.messageModel.find(query).sort({ createdAt: 1 }).limit(50).exec();
  }

  async create(messageData: any): Promise<Message> {
    const message = new this.messageModel(messageData);
    await message.save();
    
    // Обновляем lastMessageAt в треде
    await this.threadModel.findByIdAndUpdate(messageData.threadId, {
      lastMessageAt: new Date(),
    }).exec();
    
    return message;
  }

  async markAsRead(messageId: string, userId: string): Promise<Message | null> {
    return this.messageModel.findByIdAndUpdate(
      messageId,
      { $addToSet: { readBy: userId } },
      { new: true }
    ).exec();
  }
}
