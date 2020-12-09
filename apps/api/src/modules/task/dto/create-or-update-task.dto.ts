import { ICreateOrUpdateTaskDto } from '@todos/shared/interfaces';

export class CreateOrUpdateTaskDto implements ICreateOrUpdateTaskDto {
  title: string;
  dueDate: Date;
}
