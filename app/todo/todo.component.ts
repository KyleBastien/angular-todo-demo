import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoApi } from '../shared/todo-api/todo-api.service';
import { Logger } from '../shared/logger/logger';

// Usage:
// <todo></todo>
// Creates:
// A Todo Component which shows the form to input Todo's as well as the list of Todos to display.

@Component({
  selector: 'todo',
  templateUrl: './todo.html'
})
export class TodoComponent implements OnInit {
  public todoList: TodoItem[];
  public searchQuery: string;
  public statusFilter: string;

  constructor(private logger: Logger, private todoApi: TodoApi) {
    this.todoList = [];
    this.searchQuery = '';
    this.statusFilter = '';
  }

  ngOnInit() {
    return this.getTodoList().then(() => {
      this.logger.info('Activated Todo Controller');
    });
  }

  private getTodoList() {
    return this.todoApi.getTodoList().then((data) => {
      this.todoList = data;
      return this.todoList;
    });
  }

  public insertTodoItem(title: string) {
    if(title === '') {
      return;
    }
    
    // Create our Todo Item Model from the title given to us
    var item: TodoItem = {
      title: title,
      completed: false,
      Key: this.createRandomString(16)
    };
    
    return this.todoApi.insertTodoItem(item).then((data: TodoItem) => {
      var indexOfData = this.getIndexOfTodoItem(this.todoList, data);
      if(indexOfData === -1) {
        this.todoList.push(data);
      }
      return data;
    });
  }

  public removeTodoItem(item: TodoItem) {
    if(item === null || item === {}) {
      return;
    }
    
    return this.todoApi.deleteTodoItem(item).then((data: TodoItem) => {
      var indexOfData = this.getIndexOfTodoItem(this.todoList, data);
      if(indexOfData !== -1) {
        this.todoList.splice(indexOfData, 1);
      }
      return data;
    });
  }

  public updateTodoItem(item: TodoItem) {
    if(item === null || item === {}) {
      return;
    }
    
    var index = this.todoList.indexOf(item as never);
    
    return this.todoApi.updateTodoItem(item).then((data: TodoItem) => {
      if(!this.todoItemsEqual(this.todoList[index], data)) {
        this.todoList[index] = data as never;
      }
      return data;
    });
  }

  public clearCompletedItems() {
    return this.todoApi.clearCompleted().then((data: TodoItem[]) => {
      if(this.todoList !== data) {
        this.todoList = data;
      }
      return this.todoList;
    });
  }

  private createRandomString(N) {
    return Array(N+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, N);
  }

  private getIndexOfTodoItem(todos: TodoItem[], item: TodoItem) {
    return todos.map((el) => {
      return el.Key;
    }).indexOf(item.Key);
  }

  private todoItemsEqual(one: TodoItem, two: TodoItem) {
    if(one.Key !== two.Key || one.title !== two.title || one.completed !== two.completed) {
      return false;
    }
    return true;
  }
}
