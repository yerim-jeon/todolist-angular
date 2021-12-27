import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TodosComponent} from "./todo/todos/todos.component";
import {TodoComponent} from "./todo/todos/todo/todo.component";
import {FormsModule} from "@angular/forms";
import { AddTodoComponent } from './todo/todos/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent, TodosComponent, TodoComponent, AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
