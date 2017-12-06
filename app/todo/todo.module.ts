import * as angular from 'angular';
import { TodoComponent } from './todo.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { todoFormModule } from './todo-form/todo-form.module';
import { coreModule } from '../core/core.module';
import { todoApiModule } from '../todo-api/todo-api.module';
import { NgModule } from '@angular/core';
import { TodoFooterModule } from './todo-footer/todo-footer.module';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { downgradeComponent } from '@angular/upgrade/static';
import { TodoListComponent } from './todo-list/todo-list.component';

export const todoModule = angular
  .module('todo.todo', [
    coreModule.name,
    todoApiModule.name,
    todoFormModule.name
  ])
  .component('todo', TodoComponent)
  .directive('todoFooter', downgradeComponent({ component: TodoFooterComponent }))
  .directive('todoList', downgradeComponent({ component: TodoListComponent }))
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

@NgModule({
  imports: [
    TodoFooterModule,
    TodoListModule
  ]
})
export class TodoModule {}
