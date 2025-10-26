import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema({ timestamps: true })
export class Message {
  @Prop({ required: true, ref: 'Thread' })
  threadId: string;

  @Prop({ ref: 'Order' })
  orderId?: string;

  @Prop({ required: true, ref: 'User' })
  fromUserId: string;

  @Prop({ ref: 'User' })
  toUserId?: string;

  @Prop({ required: true, enum: ['text', 'file', 'system', 'quote', 'checklist', 'code'] })
  type: string;

  @Prop()
  text?: string;

  @Prop([{ type: String, ref: 'File' }])
  files?: string[];

  @Prop({ type: Object })
  meta?: {
    tags?: string[];
    quotedMessageId?: string;
  };

  @Prop([{ type: String, ref: 'User' }])
  readBy: string[];
}

export const MessageSchema = SchemaFactory.createForClass(Message);
