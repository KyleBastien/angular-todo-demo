export class TodoListController {
  
  static $inject = ['logger'];
  constructor(private logger) {}

  private onUpdate: ({ item }) => void;
  private onRemove: ({ item }) => void;

  ////////////////

  public $onInit() {
    this.logger.info('Activated Todo List Component');
  }

  public updateTodoItem(item) {
    this.onUpdate({
      item: item
    });
  }

  public removeTodoItem(item) {
    this.onRemove({
      item: item
    });
  }
}