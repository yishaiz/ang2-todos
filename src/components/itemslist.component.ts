import {Component, ViewEncapsulation} from '@angular/core';
import {TodoItemComponent} from "./item.component";


@Component({
  selector: 'todo-items-list',
  styles: [`

.todo-list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.todo-list li {
	position: relative;
	font-size: 24px;
	border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
	border-bottom: none;
}

.todo-list li.editing {
	border-bottom: none;
	padding: 0;
}

.todo-list li.editing .edit {
	display: block;
	width: 506px;
	padding: 13px 17px 12px 17px;
	margin: 0 0 0 43px;
}

.todo-list li.editing .view {
	display: none;
}

.todo-list li .toggle {
	text-align: center;
	width: 40px;
	/* auto, since non-WebKit browsers doesn't support input styling */
	height: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	border: none; /* Mobile Safari */
	-webkit-appearance: none;
	appearance: none;
}

.todo-list li .toggle:after {
	content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
}

.todo-list li .toggle:checked:after {
	content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}

.todo-list li .edit {
	display: none;
}

.todo-list li.editing:last-child {
	margin-bottom: -1px;
}

`],
  directives: [
    TodoItemComponent
  ],
  template: `
    
    <ul class="todo-list">

      <!--<todo-item [task]="task"></todo-item>-->
      
      <!--<li *ngFor="let task of tasks; let i=index" [task]="task"  class="{{task.completed ? 'completed' : ''}}">-->
<li *ngFor="let task of tasks; let i=index" 
     class="{{task.completed ? 'completed' : ''}}">
        {{i}} : {{task.name}}
</li>

<hr/>

<li *ngFor="let task of tasks; let i=index" 
     class="{{task.completed ? 'completed' : ''}}">
        <todo-item [task]="task"> </todo-item>
</li>



    </ul>
   
    `
  // ,   encapsulation: ViewEncapsulation.None

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
      completed: false,
      checked : true
    }, {
      name: 'task 2 - services',
      date: '2016-08-01',
      completed: false,
      checked : false
    }, {
      name: 'task 3 - forms',
      date: '2016-09-01',
      completed: true,
      checked : true
    },
  ];

}
