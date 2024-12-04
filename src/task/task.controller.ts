import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  create(@Body() taskDto: TaskDto) {
    return taskDto;
  }
  J
  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get("/:id")
  getTaskById(@Param('id') id: string): TaskDto | undefined {
    return this.taskService.findTaskById(id);
  }
}
