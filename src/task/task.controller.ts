import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskDto: TaskDto) {
    return taskDto;
  }

  J;

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): TaskDto | undefined {
    return this.taskService.findTaskById(id);
  }

  @Put('/:id')
  updateTaskById(
    @Param('id') id: string,
    @Body() taskDto: TaskDto,
  ): TaskDto | undefined {
    return this.taskService.updateTaskById(id, taskDto);
  }
}
