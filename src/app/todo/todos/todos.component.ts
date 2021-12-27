import { Component, OnInit } from '@angular/core';
import {Todo} from "../share/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  newText: string = '';

  todos: Todo[]; // todos: Array<Todo>;

  constructor() {
    // 생성될 때 더미 데이터들이 들어가짐
    this.todos = [
      { done: false, text: '운동하기' },
      { done: true, text: '공부하기' }
    ];
  }

  ngOnInit(): void {
  }

  toggleTodo(todo: Todo) {
    todo.done = !todo.done;
  }

  addTodo(text: string) {
    this.todos.push({
      done: false,
      text
    });
  }
}
