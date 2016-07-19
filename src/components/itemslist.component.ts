import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'todo-items-list',
  styles:[ ],
  directives:[
  ],
  template: `
    
    <!-- List -->
    <ul class="todo-list">

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
      <li class="completed">

        <div class="view">
          <input class="toggle"
                 type="checkbox"
                 checked>

          <label>Todo Tittle</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>

      <!-- Editing Item -->
      <li class="editing">

        <div class="view">
          <input class="toggle"
                 type="checkbox">

          <label>Todo Tittle</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>

      <!-- /Item-->
    </ul>
    <!-- /List-->
   
    `
  ,
  encapsulation: ViewEncapsulation.None

})

export class TodoItemListComponent {}
