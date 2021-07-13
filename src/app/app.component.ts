import { Component } from '@angular/core';
import { Todo } from './todo';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';

  todos: Todo[] = [{task: "fold clothes",completed: false},
  {task: "put clothes away",completed: false},
  {task: "relax",completed: false},
  {task: "try to pet cat",completed: true},
  {task: "pet dog",completed: false},
  {task: "be awesome",completed: false}]

  addTodo(form: NgForm){
    let task = form.form.value.task;
    let completed = false;
    let newTodo: Todo = {task: task, completed: completed};
    this.todos.push(newTodo); 
  }

  completeTodo(task: number){
    for(let i = 0; i < this.todos.length; i++){
      let todo: Todo = this.todos[task];
      todo.completed = true;
    }

  }

  removeTodo(task: number){
      this.todos.splice(task, 1);
  }
}
