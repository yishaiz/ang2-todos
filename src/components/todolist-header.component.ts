import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'todo-list-header',
  styles:[`

 input::-webkit-input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

  input::-moz-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

  input::input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

 h1 {
	position: absolute;
	top: -155px;
	width: 100%;
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: rgba(175, 47, 47, 0.15);
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
}



.new-todo {
	padding: 16px 16px 16px 60px;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}

`],
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
  // ,  encapsulation: ViewEncapsulation.None
})

export class TodolistHeaderComponent {}
