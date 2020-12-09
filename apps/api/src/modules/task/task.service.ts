import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateOrUpdateTaskDto } from './dto/create-or-update-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async create(dto: CreateOrUpdateTaskDto): Promise<Task> {
    const createdCat = new this.taskModel(dto);
    return createdCat.save();
  }

  async delete(id: string): Promise<Task> {
    return this.taskModel.findOneAndDelete({ _id: id }).exec();
  }

  async findOneById(id: string): Promise<TaskDocument> {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, dto: CreateOrUpdateTaskDto): Promise<TaskDocument> {
    return this.taskModel.findByIdAndUpdate(id, dto).exec();
  }
}
