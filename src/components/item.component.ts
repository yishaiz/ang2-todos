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
  styles: [`

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

 

button,
input[type="checkbox"] {
	outline: none;
}



label {
 	white-space: pre-line;
	word-break: break-all;
	padding: 15px 60px 15px 15px;
	margin-left: 45px;
	display: block;
	line-height: 1.2;
	transition: color 0.4s;
}

.todo-list li.completed label {
	color: #d9d9d9;
	text-decoration: line-through;
}

 .destroy {
	display: none;
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	width: 40px;
	height: 40px;
	margin: auto 0;
	font-size: 30px;
	color: #cc9a9a;
	margin-bottom: 11px;
	transition: color 0.2s ease-out;
}

  .destroy:hover {
	color: #af5b5e;
}

 .destroy:after {
	content: '×';
}

.todo-list li:hover .destroy {
	display: block;
}

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


/*label{color:green}*/

/*button{}*/
`],
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
  // ,   encapsulation: ViewEncapsulation.None

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
