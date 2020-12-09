import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '@todos/test-utils';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Task, TaskDocument, TaskSchema } from './schemas/task.schema';
import { Model } from 'mongoose';

describe('TaskService', () => {
  let taskService: TaskService;
  let taskModel: Model<TaskDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
      ],
      providers: [
        TaskService,
        {
          provide: getModelToken(Task.name),
          useValue: taskModel,
        },
      ],
    }).compile();

    taskService = module.get<TaskService>(TaskService);
    taskModel = module.get<Model<TaskDocument>>(getModelToken(Task.name));
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });

  it('service should be defined', () => {
    expect(taskService).toBeDefined();
  });

  it('taskModel should be defined', () => {
    expect(taskModel).toBeDefined();
  });
});
