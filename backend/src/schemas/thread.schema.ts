import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ThreadDocument = Thread & Document;

@Schema({ timestamps: true })
export class Thread {
  @Prop({ required: true, enum: ['order', 'lead', 'support'] })
  ownerType: string;

  @Prop({ required: true })
  ownerId: string;

  @Prop()
  lastMessageAt?: Date;

  @Prop([{ type: String, ref: 'User' }])
  participants: string[];
}

export const ThreadSchema = SchemaFactory.createForClass(Thread);
