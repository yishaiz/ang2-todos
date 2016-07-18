import {bootstrap} from '@angular/platform-browser-dynamic';
import {TodolistComponent,} from 'components/todolist.component';

bootstrap(TodolistComponent)
  .catch(err => console.error(err));


