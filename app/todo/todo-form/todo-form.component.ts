import * as angular from 'angular';
import { TodoFormController } from './todo-form.controller';

// Usage:
// <todo-form on-search-query-changed="$ctrl.onSearchQueryChanged(searchQuery)"
//   on-status-filter-changed="$ctrl.onStatusFilterChanged(statusFilter)"
//   on-item-added="$ctrl.onItemAdded(item)"
//   on-clear-completed-item="$ctrl.clearCompletedItems()"></todo-form>
// Creates:
// The form to create and filter todo's, plus clear completed todo's.

export const TodoFormComponent: angular.IComponentOptions = {
  templateUrl: '/app/todo/todo-form/todo-form.html',
  controller: TodoFormController,
  bindings: {
    onSearchQueryChanged: '&',
    onStatusFilterChanged: '&',
    onItemAdded: '&',
    onClearCompletedItem: '&'
  },
};
