import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'todo-list-header',

  template: ` 

  <!--Header-->
  <header class="header">

    <!-- Header Title-->
    <h1>todos</h1>

    <!--Header Form-->
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus>
  </header> `
  ,
  encapsulation: ViewEncapsulation.None
})

export class TodolistHeaderComponent {}
