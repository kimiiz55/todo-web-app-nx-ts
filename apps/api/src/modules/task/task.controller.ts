import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getData() {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto);
  }
}
