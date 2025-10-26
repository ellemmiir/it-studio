import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileDocument = File & Document;

@Schema({ timestamps: true })
export class File {
  @Prop({ required: true })
  filename: string;

  @Prop({ required: true })
  size: number;

  @Prop({ required: true })
  mime: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true, ref: 'User' })
  ownerId: string;

  @Prop({ type: Object })
  linkedTo?: {
    type?: string;
    id?: string;
  };

  @Prop({ default: true })
  virusScanned: boolean;
}

export const FileSchema = SchemaFactory.createForClass(File);
