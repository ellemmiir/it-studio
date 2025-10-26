import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phone?: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ required: true, enum: ['client', 'manager', 'admin', 'finance', 'engineer'], default: 'client' })
  role: string;

  @Prop({ type: Object })
  profile?: {
    firstName?: string;
    lastName?: string;
    companyId?: string;
    timezone?: string;
    locale?: string;
  };

  @Prop({ required: true, enum: ['active', 'invited', 'blocked'], default: 'invited' })
  status: string;

  @Prop()
  lastLoginAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
