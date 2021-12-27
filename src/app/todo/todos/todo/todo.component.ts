import { Component, Input, OnInit } from '@angular/core';
import {Todo} from "../../share/todo.model";

@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox" [checked]="todo.done">{{ todo.text }}
  `,
  styles: [
  ]
})
export class TodoComponent implements OnInit {
  // has no initializer and is not definitely assigned in the constructor
  // 1. @Input() todo: Todo = {} as Todo;
  // 2. tsconfig.json -> set "strictPropertyInitialization": false
  @Input() todo!: Todo;

  constructor() {
  }

  ngOnInit(): void {
  }
}
