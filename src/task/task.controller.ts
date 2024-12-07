import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskDto: TaskDto) {
    return this.taskService.create(taskDto);
  }

  @Get()
  getAllTasks(@Query() params: FindAllParameters): TaskDto[] {
    return this.taskService.getAllTasks(params);
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

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string) {
    this.taskService.deleteById(id);
  }
}
