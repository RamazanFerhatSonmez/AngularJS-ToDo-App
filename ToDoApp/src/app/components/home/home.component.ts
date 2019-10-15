import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoService } from '../../services/todo.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  data = {};


  constructor(
    private todoServices: TodoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getAllTodo();
  }
  drop(event: CdkDragDrop<string[]>) {
    debugger
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.updateTodo();
    }
  }
  addTodo(todo) {
    const obj = {
      todo: todo.value
    };
    this.todoServices.addTodo(obj)
      .subscribe((res) => {
        console.log(res);
        this._snackBar.open("Ekleme Başarılı","", {
          duration: 2000,
        });
      }, (err) => {
        console.log(err);
      });
    todo.value = "";
    this.getAllTodo();
  }
  getAllTodo() {
    this.todoServices.getAllTodos()
      .subscribe((res) => {
        debugger
        Object.keys(res).forEach((key) => {
          this.data[key] = res[key];
        });
      }, (err) => {
        debugger
        console.log(err);
      });
  }
  updateTodo() {
    this.todoServices.updateTodo(this.data)
      .subscribe((res) => {
        this.getAllTodo();
      }, (err) => {
        debugger
        console.log(err);
      });
  }
  removeTodo(id) {
    debugger
    this.todoServices.removeTodo(id)
      .subscribe((res) => {
        this._snackBar.open("Silme Başarılı","", {
          duration: 2000,
        });
        this.getAllTodo();
      }, (err) => {
        
      });
  }

}
