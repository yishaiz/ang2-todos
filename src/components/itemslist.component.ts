import {Component, ViewEncapsulation} from '@angular/core';
import {TodoItemComponent} from "./item.component";
import {Task} from "./Task";


@Component({
  selector: 'todo-items-list',
  styles: [],
  directives: [
    TodoItemComponent
  ],
  template: `
    
    <ul class="todo-list">

<li *ngFor="let task of tasks; let i=index" 
     class="{{task.completed ? 'completed' : ''}}">
        {{i}} : {{task.name}}
</li>

<hr/>

<li *ngFor="let task of tasks; let i=index" 
     class="{{task.completed ? 'completed' : ''}}">
        <todo-item [task]="task"> </todo-item>
</li>

    </ul>
   
    `
  ,
  encapsulation: ViewEncapsulation.None

})

export class TodoItemListComponent {

  /*

   public task = {
   name: 'task 1-from parent component ',
   date1: '2016-07-01',
   completed:  true
   };
   */

  public tasks:Task[] = [
    <Task> {
      name: 'task 1 - build angular 2',
      // date: '2016-07-01',
      date: new Date(2016,7,1),
      completed: false,
      checked: true
    },
    <Task> {
      name: 'task 2 - services',
      date: new Date(2016,5,10),
      completed: false,
      checked: false
    },
    <Task> {
      name: 'task 3 - forms',
      date: new Date(2016,8,3),
      completed: true,
      checked: true
    }
  ];

}
