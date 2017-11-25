import * as angular from 'angular';
import { TodoComponent } from './todo.component';
import { todoListModule } from './todo-list/todo-list.module';
import { todoFormModule } from './todo-form/todo-form.module';
import { coreModule } from '../core/core.module';
import { todoApiModule } from '../todo-api/todo-api.module';

export const todoModule = angular
  .module('todo.todo', [
    coreModule.name,
    todoApiModule.name,
    todoListModule.name,
    todoFormModule.name
  ])
  .component('todo', TodoComponent)
  .run(['routerHelper', (routerHelper) => {
    routerHelper.configureStates([
      {
        state: 'todo',
        config: {
          url: '/todo',
          component: 'todo',
          title: 'Todo'
        }
      }
    ]);
  }]);
