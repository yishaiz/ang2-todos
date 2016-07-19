import {Component, ViewEncapsulation} from '@angular/core';

interface Task {
  name: string,
  date: Date,
  completed: boolean
}

@Component({
  selector: 'todo-item',
  styles: [],
  directives: [],
  template: `
    
     
      <!-- Item -->
      <li class="{{task.completed ? 'completed' : ''}}">

        <div class="view">
          <input class="toggle" type="checkbox">

          <label>{{task.name}}</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>

      <!-- Completed -->
      <!--<li class="completed">-->

<!--
          <input class="toggle"
                 type="checkbox"
                 checked>
-->
     
    `
  ,
  encapsulation: ViewEncapsulation.None

})

export class TodoItemComponent {
  public task : Task = <Task>{
    name: 'task 1 ',
    date: '2016-07-01',
    completed: false
  };
}
