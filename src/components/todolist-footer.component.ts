import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'todo-list-footer',
styles:[`

button {
/*background-color:red;*/

	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	font-size: 100%;
	vertical-align: baseline;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	-webkit-appearance: none;
	appearance: none;
	-webkit-font-smoothing: antialiased;
	-moz-font-smoothing: antialiased;
	font-smoothing: antialiased;
}



.footer {
	color: #777;
	padding: 10px 15px;
	height: 20px;
	text-align: center;
	border-top: 1px solid #e6e6e6;
}

.footer:before {
	content: '';
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 50px;
	overflow: hidden;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
	            0 8px 0 -3px #f6f6f6,
	            0 9px 1px -3px rgba(0, 0, 0, 0.2),
	            0 16px 0 -6px #f6f6f6,
	            0 17px 2px -6px rgba(0, 0, 0, 0.2);
}



`],
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
  ,  encapsulation: ViewEncapsulation.None

})

export class TodolistFooterComponent {}
