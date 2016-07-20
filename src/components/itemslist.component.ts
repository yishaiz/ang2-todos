import {Component, ViewEncapsulation} from '@angular/core';
import {TodoItemComponent} from "./item.component";


@Component({
  selector: 'todo-items-list',
  styles: [],
  directives: [
    TodoItemComponent
  ],
  template: `
    
    <ul class="todo-list">

      <!--<todo-item [task]="task"></todo-item>-->
      
      <!--<li *ngFor="let task of tasks; let i=index" [task]="task"  class="{{task.completed ? 'completed' : ''}}">-->
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


  public task = {
    name: 'task 1-from parent component ',
    date1: '2016-07-01',
    completed: true
  };

  public tasks = [
    {
      name: 'task 1 - build angular 2',
      date: '2016-07-01',
      completed: false
    }, {
      name: 'task 2 - services',
      date: '2016-08-01',
      completed: false
    }, {
      name: 'task 3 - forms',
      date: '2016-09-01',
      completed: true
    },
  ];

}
