import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ITask} from '@todos/shared/interfaces'

export type TaskDocument = Task & Document;

@Schema()
export class Task implements ITask {
  @Prop({ required: true })
  title: string;

  @Prop()
  dueDate: Date;

  @Prop()
  isCompleted: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);