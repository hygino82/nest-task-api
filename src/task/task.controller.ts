import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskDto: TaskDto) {
    console.log(taskDto);
    return taskDto;
  }

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }
}
