import { TodoItem } from "../todo-api/todo-api.service";

export class TodoController {

  public todoList: TodoItem[];
  public completedItems: number;

  static $inject = ['logger', 'TodoApi'];
  constructor(private logger, private TodoApi) {}

  public $onInit() {
    return this.getTodoList().then(() => {
      this.logger.info('Activated Todo Controller');
    });
  }

  private getTodoList() {
    return this.TodoApi.getTodoList().then((data) => {
      this.todoList = data;
      return this.todoList;
    });
  }

  public insertTodoItem(title) {
    if(title === '') {
      return;
    }
    
    // Create our Todo Item Model from the title given to us
    var item = {
      title: title,
      completed: false,
      Key: this.createRandomString(16)
    };
    
    return this.TodoApi.insertTodoItem(item).then((data) => {
      var indexOfData = this.getIndexOfTodoItem(this.todoList, data);
      if(indexOfData === -1) {
        this.todoList.push(data as never);
      }
      return data;
    });
  }

  public removeTodoItem(item) {
    if(item === null || item === {}) {
      return;
    }
    
    return this.TodoApi.deleteTodoItem(item).then((data) => {
      var indexOfData = this.getIndexOfTodoItem(this.todoList, data);
      if(indexOfData !== -1) {
        this.todoList.splice(indexOfData, 1);
      }
      return data;
    });
  }

  public updateTodoItem(item) {
    if(item === null || item === {}) {
      return;
    }
    
    var index = this.todoList.indexOf(item as never);
    
    return this.TodoApi.updateTodoItem(item).then((data) => {
      if(!this.todoItemsEqual(this.todoList[index], data)) {
        this.todoList[index] = data as never;
      }
      return data;
    });
  }

  public clearCompletedItems() {
    return this.TodoApi.clearCompleted().then((data) => {
      if(this.todoList !== data) {
        this.todoList = data;
      }
      return this.todoList;
    });
  }

  private createRandomString(N) {
    return Array(N+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, N);
  }

  private todoItemsEqual(one, two) {
    if(one.Key !== two.Key || one.title !== two.title || one.completed !== two.completed) {
      return false;
    }
    return true;
  }

  private getIndexOfTodoItem(todos, item) {
    return todos.map((el) => {
      return el.Key;
    }).indexOf(item.Key);
  }
}
