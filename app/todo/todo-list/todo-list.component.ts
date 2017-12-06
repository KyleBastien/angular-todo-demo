import * as angular from 'angular';
import { TodoListController } from './todo-list.controller';
import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

// Usage:
// <todo-list items="$ctrl.items"></todo-list>
// Creates:
// A List of Todo Items that are displayed

export const TodoListComponent: angular.IComponentOptions = {
  templateUrl: '/app/todo/todo-list/todo-list.html',
  controller: TodoListController,
  bindings: {
    items: '<',
    searchQuery: '<',
    statusFilter: '<',
    onUpdate: '&',
    onRemove: '&'
  },
};

@Directive({
  selector: 'todo-list',
  inputs: ['items', 'searchQuery', 'statusFilter', 'onUpdate', 'onRemove']
})
export class TodoListComponentFacade extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('todoList', elementRef, injector);
  }
}
