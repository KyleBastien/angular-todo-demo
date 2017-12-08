import { Injectable } from '@angular/core';
import * as cloneDeep from 'lodash/fp/cloneDeep';

export interface TodoItem {
  Key: string;
  title: string;
  completed: boolean;
}

@Injectable()
export class TodoApi {
  public todoList: TodoItem[];
  private STORAGE_ID;

  constructor() {
    this.todoList = [];
    this.STORAGE_ID = 'todos-angularjs';
  }

  public getTodoList(): Promise<TodoItem[]> {
    return new Promise((resolve) => {
      this.todoList = cloneDeep(this.getFromLocalStorage());
      resolve(this.todoList);
    });
  }

  public insertTodoItem(item: TodoItem): Promise<TodoItem> {
    return new Promise((resolve) => {
      this.todoList.push(item);
      this.saveToLocalStorage(this.todoList);
      resolve(item);
    });
  }

  public updateTodoItem(item: TodoItem): Promise<TodoItem> {
    return new Promise((resolve) => {
      const index = this.todoList.map((el) => {
        return el.Key;
      }).indexOf(item.Key);

      this.todoList[index] = item;

      this.saveToLocalStorage(this.todoList);
      resolve(item);
    });
  }

  public deleteTodoItem(item: TodoItem): Promise<TodoItem> {
    return new Promise((resolve) => {
      this.todoList.splice(this.todoList.indexOf(item), 1);

      this.saveToLocalStorage(this.todoList);
      resolve(item);
    });
  }

  public clearCompleted(): Promise<TodoItem[]> {
    return this.clearOnProperty('completed');
  }

  private clearOnProperty(itemProperty: string): Promise<TodoItem[]> {
    return new Promise((resolve) => {
      const notProperty = this.todoList.filter((item: TodoItem) => {
        return !item[itemProperty];
      });

      this.todoList = cloneDeep(notProperty);

      this.saveToLocalStorage(this.todoList);
      resolve(this.todoList);
    });
  }

  private getFromLocalStorage(): TodoItem[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
  }

  private saveToLocalStorage(items): void {
    localStorage.setItem(this.STORAGE_ID, JSON.stringify(items));
  }
}
