import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Task} from './Task';

@Component({
  selector: 'todo-item',
  styles: [],
  directives: [],
  template: `
 
        <div class="view">
          
          <label>{{task.name}}</label>
          <!--<label>{{task.date}}</label>-->

          <button class="destroy"></button>

        </div>
    
      <input *ngIf="!task.completed"  class="toggle"
             type="checkbox"
             [checked]="task.checked">
    `
  ,
  encapsulation: ViewEncapsulation.None

})

export class TodoItemComponent {


  @Input() task: Task
  /*
   public task1 = {
   name: 'task 1 ',
   date1: '2016-07-01',
   completed: false
   };*/
}
