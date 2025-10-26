import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ServiceDocument = Service & Document;

@Schema({ timestamps: true })
export class Service {
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  category: string;

  @Prop()
  description?: string;

  @Prop([String])
  features?: string[];

  @Prop({ type: Object })
  marketPriceRange?: {
    min?: number;
    max?: number;
  };

  @Prop({ type: Object })
  priceDump?: {
    min?: number;
    max?: number;
    activeUntil?: Date;
  };

  @Prop({ type: Object })
  pricePostDump?: {
    min?: number;
    max?: number;
  };

  @Prop([{ type: Object }])
  options?: Array<{
    key: string;
    title: string;
    type: 'select' | 'number' | 'bool';
    values?: any[];
  }>;

  @Prop({ default: true })
  isActive: boolean;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
