import {Component, ViewEncapsulation} from '@angular/core';
import {TodoItemComponent} from "./item.component";


@Component({
  selector: 'todo-items-list',
  styles: [],
  directives: [
    TodoItemComponent
  ],
  template: `
    
    <!-- List -->
    <ul class="todo-list">

      <todo-item [task]="task"></todo-item>
      <!--<todo-item ></todo-item>-->
      <!--<todo-item></todo-item>-->



      <!-- Item -->
     <!-- <li>

        <div class="view">
          <input class="toggle" type="checkbox">

          <label>Todo Tittle</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>

      &lt;!&ndash; Completed &ndash;&gt;
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

      &lt;!&ndash; Editing Item &ndash;&gt;
      <li class="editing">

        <div class="view">
          <input class="toggle"
                 type="checkbox">

          <label>Todo Tittle</label>

          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>
-->
      <!-- /Item-->
      
      
      
      
    </ul>
    <!-- /List-->
   
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
  ] ;

}
