import * as angular from 'angular';
import { TodoListComponent, TodoListComponentFacade } from './todo-list.component';
import { ItemStatusFilter } from './todo-list.filter';
import { coreModule } from '../../core/core.module';
import { NgModule } from '@angular/core';

export const todoListModule = angular
  .module('todo.todo-list', [
    coreModule.name
  ])
  .component('todoList', TodoListComponent)
  .filter('ItemStatusFilter', ItemStatusFilter);

@NgModule({
  declarations: [TodoListComponentFacade],
  exports: [TodoListComponentFacade],
})
export class TodoListModule {}
