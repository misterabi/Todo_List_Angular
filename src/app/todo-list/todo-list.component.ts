declare var M: any;
import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  isLoading = false;

  addTodoItem(label: string) {
    this.todoService.createTodo(label).subscribe((hasTodoBeenCreated) => {
      if (hasTodoBeenCreated) {
        this.refreshTodos();
      } else {
        alert('Erreur serveur');
      }
    });
  }

  private refreshTodos() {
    this.isLoading = true;
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      this.isLoading = false;
    });
  }

  notifyUserTodoUpdated(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe((hasTodoBeenUpdated) => {
      if (hasTodoBeenUpdated) {
        M.toast({ html: `La tache ${todo.label} a été mise à jour` });
        this.refreshTodos();
      } else {
        alert('Erreur serveur');
      }
    });
  }

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.refreshTodos();
  }
}
