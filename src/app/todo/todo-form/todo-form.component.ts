import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Logger } from '../../shared/logger/logger';

// Usage:
// <todo-form (onSearchQueryChanged)="onSearchQueryChanged($event)"
//   (onStatusFilterChanged)="onStatusFilterChanged($event)"
//   (onItemAdded)="onItemAdded($event)"></todo-form>
// Creates:
// The form to create and filter todo's, plus clear completed todo's.

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output()
  public onSearchQueryChanged: EventEmitter<string>;

  @Output()
  public onStatusFilterChanged: EventEmitter<string>;

  @Output()
  public onItemAdded: EventEmitter<string>;

  public newItemTitle: string;
  public statusFilter: string;
  public searchQuery: string;

  constructor(private logger: Logger) {
    this.onSearchQueryChanged = new EventEmitter<string>();
    this.onStatusFilterChanged = new EventEmitter<string>();
    this.onItemAdded = new EventEmitter<string>();
    this.newItemTitle = '';
    this.statusFilter = 'null';
    this.searchQuery = '';
  }

  public ngOnInit() {
    this.logger.info('TodoForm Component Activated');
  }

  public insertTodoItem() {
    this.onItemAdded.emit(this.newItemTitle);
  }

  public statusFilterChanged() {
    this.onStatusFilterChanged.emit(this.statusFilter);
  }

  public searchQueryChanged() {
    this.onSearchQueryChanged.emit(this.searchQuery);
  }
}
