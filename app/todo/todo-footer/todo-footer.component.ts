import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TodoItem } from '../../todo-api/todo-api.service';
import { Logger } from '../../blocks/logger/logger';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.html',
})
export class TodoFooterComponent implements OnInit {

  @Input()
  public items: TodoItem[];

  @Output()
  public removeCompleted;

  constructor(private logger: Logger) {
    this.items = [];
    this.removeCompleted = new EventEmitter<void>();
  }

  ngOnInit() {
    this.logger.info('TodoFooter Component Activated');
  }

  get completedCount(): number {
    return this.items.filter(item => item.completed).length;
  }

  get totalCount(): number {
    return this.items.length;
  }

}