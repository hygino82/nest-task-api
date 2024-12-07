import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [
    {
      id: '1',
      title: 'Limpar a casa',
      description: 'Varrer a casa e lavar a louça',
      status: 'pendente',
      expirationDate: new Date(2024, 11, 4),
    },
    {
      id: '2',
      title: 'Comprar supermercado',
      description: 'Fazer compras para a semana',
      status: 'pendente',
      expirationDate: new Date(2024, 11, 5),
    },
    {
      id: '3',
      title: 'Estudar para a prova',
      description: 'Revisar os temas de matemática',
      status: 'em andamento',
      expirationDate: new Date(2024, 11, 6),
    },
    {
      id: '4',
      title: 'Ir ao médico',
      description: 'Consulta de rotina',
      status: 'concluída',
      expirationDate: new Date(2024, 10, 20),
    },
    {
      id: '5',
      title: 'Reunião com equipe',
      description: 'Discutir o progresso dos projetos',
      status: 'pendente',
      expirationDate: new Date(2024, 11, 7),
    },
    {
      id: '6',
      title: 'Reparar o carro',
      description: 'Levar o carro para revisão',
      status: 'pendente',
      expirationDate: new Date(2024, 11, 8),
    },
  ];

  create(task: TaskDto) {
    this.tasks.push(task);
  }

  getAllTasks(params: FindAllParameters): TaskDto[] {
    return this.tasks.filter((t) => {
      let match = true;

      if (params.title != undefined && !t.title.includes(params.title)) {
        match = false;
      }

      if (params.status != undefined && !t.status.includes(params.status)) {
        match = false;
      }

      return match;
    });
  }

  findTaskById(id: string): TaskDto | undefined {
    const res = this.tasks.find((x) => x.id === id);

    if (res) {
      return res;
    }

    throw new HttpException(
      `Não existe tarefa com o id: ${id}`,
      HttpStatus.NOT_FOUND,
    );
  }

  updateTaskById(id: string, task: TaskDto) {
    const res = this.tasks.find((x) => x.id === id);

    if (res) {
      res.status = task.status;
      res.description = task.description;
      res.title = task.title;
      return res;
    } else {
      throw new HttpException(
        `Não existe tarefa com o id: ${id}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  deleteById(id: string) {
    const res = this.tasks.find((x) => x.id === id);
    if (res) {
      this.tasks = this.tasks.filter((x) => x.id != id);
    } else {
      throw new HttpException(
        `Não existe tarefa com o id: ${id}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
