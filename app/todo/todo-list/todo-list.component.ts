import { Directive, ElementRef, Injector, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { transition, animate, style, trigger, state } from '@angular/animations';
import { TodoItem } from '../../shared/todo-api/todo-api.service';
import { Logger } from '../../shared/logger/logger';

// Usage:
// <todo-list [items]="items" [searchQuery]="searchQuery" [statusFilter]="statusFilter"
// (onUpdate)="updateTodoItem($event)" (onRemove)="removeTodoItem($event)"></todo-list>
// Creates:
// A List of Todo Items that are displayed

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1, height: '22px' })),
      transition(':enter', [
        style({ opacity: 0, height: '0px', overflow: 'hidden' }),
        animate('0.5s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0, height: '0px', overflow: 'hidden' }))
      ])
    ])
  ]
})
export class TodoListComponent implements OnInit {
  @Input()
  public items: TodoItem[];

  @Input()
  public searchQuery: string;

  @Input()
  public statusFilter: string;

  @Output()
  public onUpdate: EventEmitter<TodoItem>;

  @Output()
  public onRemove: EventEmitter<TodoItem>;

  constructor(private logger: Logger) {
    this.onUpdate = new EventEmitter<TodoItem>();
    this.onRemove = new EventEmitter<TodoItem>();
  }

  public ngOnInit() {
    this.logger.info('Activated Todo List Component');
  }

  public updateTodoItem(item: TodoItem, newCompletedStatus: boolean) {
    item.completed = newCompletedStatus;
    this.onUpdate.emit(item);
  }

  public removeTodoItem(item: TodoItem) {
    this.onRemove.emit(item);
  }
}
