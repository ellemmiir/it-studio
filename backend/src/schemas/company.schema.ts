import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {
  @Prop({ required: true })
  name: string;

  @Prop()
  inn?: string;

  @Prop()
  kpp?: string;

  @Prop()
  ogrn?: string;

  @Prop()
  address?: string;

  @Prop({ type: Object })
  billing?: {
    bank?: string;
    bik?: string;
    account?: string;
    correspondentAccount?: string;
  };
}

export const CompanySchema = SchemaFactory.createForClass(Company);
