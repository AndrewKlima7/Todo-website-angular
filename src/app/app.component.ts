import { Component, ComponentFactoryResolver } from '@angular/core';
import { Todo } from './todo';
import { NgForm } from '@angular/forms';
import { Logger } from './logger.service';
import { ApiTestService } from './apiTest.service';
import {Person} from './swapiPerson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logger, ApiTestService]
})
export class AppComponent {
  title = 'ToDo';
  person: Person | null = null;
  constructor(private logger: Logger, private api: ApiTestService){}
  testLogger(){
    this.logger.log("Hello world");
  }

  swapiCall(id: number){
    //in order to pull thig out of our call we need to subscribe
    //which is how we pull out the resulting data
    let response = this.api.getPerson(id);
    console.log(response);

    response.subscribe(
    (data: Person) => this.person = { name:data.name, height:data.height, homeworld:data.homeworld, films:data.films }
    );
  }


  todos: Todo[] = [{task: "fold clothes",completed: false},
  {task: "put clothes away",completed: false},
  {task: "relax",completed: false},
  {task: "try to pet cat",completed: true},
  {task: "pet dog",completed: false},
  {task: "be awesome",completed: false}]

  addTodo(form: NgForm){
    this.todos.push({task: form.form.value.task, completed: false}); 
  }

  completeTodo(task: number){
    this.todos[task].completed = true;
  }

  removeTodo(task: number){
    this.todos.splice(task, 1);
  }
}
