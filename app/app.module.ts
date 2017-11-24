import * as angular from 'angular';
import { AppComponent } from './app.component';
import { todoModule } from './todo/todo.module';
import { coreModule } from './core/core.module';

export const appModule = angular
  .module('todo', [
    coreModule.name,
    todoModule.name
  ])
  .component('app', AppComponent);