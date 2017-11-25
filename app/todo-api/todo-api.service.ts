import * as angular from 'angular';

export interface TodoItem {
  Key: string;
  title: string;
  completed: boolean;
}

export class TodoApi {
  public todoList: TodoItem[];

  private STORAGE_ID;

  static $inject = ['$q'];
  constructor(private $q) {
    this.todoList = [];
    this.STORAGE_ID = 'todos-angularjs';
  }

  public getTodoList() {
    let deferred = this.$q.defer();
    
    angular.copy(this.getFromLocalStorage(), this.todoList);
    deferred.resolve(this.todoList);
    
    return deferred.promise;
  }

  public insertTodoItem(item: TodoItem) {
    let deferred = this.$q.defer();
    
    this.todoList.push(item);
    
    this.saveToLocalStorage(this.todoList); 
    deferred.resolve(item);
    
    return deferred.promise;
  }

  public updateTodoItem(item: TodoItem) {
    let deferred = this.$q.defer();
    
    let index = this.todoList.map((el) => {
      return el.Key;
    }).indexOf(item.Key);
    
    this.todoList[index] = item;
    
    this.saveToLocalStorage(this.todoList);
    deferred.resolve(item);
    
    return deferred.promise;
  }

  public deleteTodoItem(item: TodoItem) {
    let deferred = this.$q.defer();
    
    this.todoList.splice(this.todoList.indexOf(item), 1);
    
    this.saveToLocalStorage(this.todoList);
    deferred.resolve(item);
    
    return deferred.promise;
  }
  
  public clearCompleted() {
    return this.clearOnProperty('completed');
  }

  private clearOnProperty(itemProperty: string) {
    var deferred = this.$q.defer();
    
    var notProperty = this.todoList.filter((item) => {
      return !item[itemProperty];
    });
    
    angular.copy(notProperty, this.todoList);
    
    this.saveToLocalStorage(this.todoList);
    deferred.resolve(this.todoList);
    
    return deferred.promise;
  }

  private getFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
  }

  private saveToLocalStorage(items) {
    localStorage.setItem(this.STORAGE_ID, JSON.stringify(items));
  }
}
