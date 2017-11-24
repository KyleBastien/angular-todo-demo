import * as angular from 'angular';
import { TodoController } from './todo.controller';

// Usage:
// <todo></todo>
// Creates:
// A Todo Component which shows the form to input Todo's as well as the list of Todos to display.

export const TodoComponent: angular.IComponentOptions = {
  templateUrl: '/app/todo/todo.html',
  controller: TodoController,
}
