import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'todo-list-footer',

  template: `
    

  <!--Footer-->
  <footer class="footer">
    <span class="todo-count">
      <strong>1</strong>
      item left
    </span>
    <button class="clear-completed">Clear completed</button>
  </footer>
  <!--End Footer-->  `
  ,
  encapsulation: ViewEncapsulation.None

})

export class TodolistFooterComponent {}
