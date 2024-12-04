import { Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

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

  getAllTasks() {
    return this.tasks;
  }

  findTaskById(id: string): TaskDto | undefined {
    return this.tasks.find(x => x.id === id);
  }
}
