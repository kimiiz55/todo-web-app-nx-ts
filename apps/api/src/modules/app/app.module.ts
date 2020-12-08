import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from '../task/schemas/task.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), TaskModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}