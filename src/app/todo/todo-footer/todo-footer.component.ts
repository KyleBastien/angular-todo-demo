import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TodoItem } from '../../shared/todo-api/todo-api.service';
import { Logger } from '../../shared/logger/logger';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
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
