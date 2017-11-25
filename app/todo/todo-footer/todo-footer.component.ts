import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../todo-api/todo-api.service';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.html',
})
export class TodoFooterComponent {

  @Input()
  public items: TodoItem[];

  @Output()
  public removeCompleted;

  constructor() {
    this.items = [];
    this.removeCompleted = new EventEmitter<void>();
  }

  get completedCount(): number {
    return this.items.filter(item => item.completed).length;
  }

  get totalCount(): number {
    return this.items.length;
  }

}