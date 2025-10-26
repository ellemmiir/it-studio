import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InvoiceDocument = Invoice & Document;

@Schema({ timestamps: true })
export class Invoice {
  @Prop({ required: true, ref: 'Order' })
  orderId: string;

  @Prop({ required: true, unique: true })
  number: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ default: 'RUB' })
  currency: string;

  @Prop({ required: true, enum: ['draft', 'issued', 'paid', 'void'], default: 'draft' })
  status: string;

  @Prop({ ref: 'File' })
  pdfFileId?: string;

  @Prop()
  issuedAt?: Date;

  @Prop()
  paidAt?: Date;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
