import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Thread, ThreadDocument } from '../schemas/thread.schema';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectModel(Thread.name) private threadModel: Model<ThreadDocument>,
  ) {}

  async getOrCreate(ownerType: string, ownerId: string, participants: string[]): Promise<Thread> {
    let thread = await this.threadModel.findOne({ ownerType, ownerId }).exec();
    if (!thread) {
      thread = new this.threadModel({ ownerType, ownerId, participants });
      await thread.save();
    }
    return thread;
  }

  async findByOwner(ownerType: string, ownerId: string): Promise<Thread | null> {
    return this.threadModel.findOne({ ownerType, ownerId }).exec();
  }

  async updateLastMessage(threadId: string): Promise<void> {
    await this.threadModel.findByIdAndUpdate(threadId, {
      lastMessageAt: new Date(),
    }).exec();
  }
}

