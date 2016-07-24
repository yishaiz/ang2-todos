import {Component, Input, ViewEncapsulation} from '@angular/core';

/*interface Task {
  name: string,
  date: Date,
  completed: boolean
}*/

// @Input ()

@Component({
  selector: 'todo-item',
  // inputs:[task],
  styles: [],
  directives: [],
  template: `
    
 
        <div class="view">
          
          <label>{{task.name}}</label>

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

  //Task = <Task>{

  @Input() task;

  public task1 = {
    name: 'task 1 ',
    date1: '2016-07-01',
    completed: false
  };
}
