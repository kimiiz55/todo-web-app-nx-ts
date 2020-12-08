import { ICreateTaskDto } from '@todos/shared/interfaces';

export class CreateTaskDto implements ICreateTaskDto {
  title: string;
  dueDate: Date;
}
