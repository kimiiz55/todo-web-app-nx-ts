import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrUpdateTaskDto } from './dto/create-or-update-task.dto';

import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getData() {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() dto: CreateOrUpdateTaskDto) {
    return this.taskService.create(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.taskService.findOneById(id);
  }

  @Patch(':id')
  async update(@Body() dto: CreateOrUpdateTaskDto, @Param('id') id: string) {
    return this.taskService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
     return this.taskService.delete(id);
  }
}
