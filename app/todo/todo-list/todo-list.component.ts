import * as angular from 'angular';
import { TodoListController } from './todo-list.controller';

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
