import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private catModel: Model<TaskDocument>) {}

  async create(dto: CreateTaskDto): Promise<Task> {
    const createdCat = new this.catModel(dto);
    return createdCat.save();
  }

  async findAll(): Promise<Task[]> {
    return this.catModel.find().exec();
  }
}
