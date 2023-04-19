import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LogsDocument = HydratedDocument<Logs>;

@Schema()
export class Logs {
  @Prop()
  invoice: string;

  @Prop()
  date_log: Date;

  @Prop()
  description: string;
}

export const LogsSchema = SchemaFactory.createForClass(Logs);