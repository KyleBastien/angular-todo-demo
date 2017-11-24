import * as angular from 'angular';
import { TodoListComponent } from './todo-list.component';
import { ItemStatusFilter } from './todo-list.filter';
import { coreModule } from '../../core/core.module';

export const todoListModule = angular
  .module('todo.todo-list', [
    coreModule.name
  ])
  .component('todoList', TodoListComponent)
  .filter('ItemStatusFilter', ItemStatusFilter);
