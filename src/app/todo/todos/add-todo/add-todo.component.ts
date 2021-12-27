import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() onTodoAdded = new EventEmitter();
  newText!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(newTodo: string) {
    this.onTodoAdded.emit(newTodo);

    if (!newTodo) {
      return;
    }

    this.newText = '';
  }

  changeNewTodo(newTodo: string) {
    this.newText = newTodo;
  }
}
