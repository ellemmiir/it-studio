import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true, ref: 'User' })
  clientId: string;

  @Prop({ ref: 'Company' })
  companyId?: string;

  @Prop({ required: true, ref: 'Service' })
  serviceId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, enum: ['new', 'discovery', 'proposal', 'in_progress', 'review', 'done', 'archived', 'lost'], default: 'new' })
  status: string;

  @Prop({ enum: [1, 2, 3], default: 2 })
  priority: number;

  @Prop({ type: Object })
  brief?: {
    answers?: any;
  };

  @Prop({ type: Object })
  estimate?: {
    min?: number;
    max?: number;
    currency?: string;
  };

  @Prop({ ref: 'User' })
  assignedTo?: string;

  @Prop([{ type: String, ref: 'User' }])
  participants?: string[];

  @Prop([{ type: String, ref: 'File' }])
  files?: string[];

  @Prop({ ref: 'Thread' })
  messagesThreadId?: string;

  @Prop([{ type: Object }])
  checklist?: Array<{
    text: string;
    done: boolean;
  }>;

  @Prop([{ type: Object }])
  timeline?: Array<{
    at: Date;
    by: string;
    action: string;
    payload?: any;
  }>;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
