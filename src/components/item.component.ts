import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'todo-item',
  styles:[ ],
  directives:[
  ],
  template: `
    
     
      <!-- Item -->
      <li>

        <div class="view">
          <input class="toggle" type="checkbox">

          <label>Todo Tittle</label>

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

export class TodoItemComponent {}
