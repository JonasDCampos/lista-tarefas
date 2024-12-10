import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../../Tarefa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{

  tarefas: Tarefa[] = [];

  constructor(private taskService:TaskService){}

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas =  dado;
      console.log(dado);
    });
  }

}