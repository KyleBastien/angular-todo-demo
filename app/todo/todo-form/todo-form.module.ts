import * as angular from 'angular';
import { TodoFormComponent } from './todo-form.component';
import { coreModule } from '../../core/core.module';

export const todoFormModule = angular
  .module('todo.todo-form', [
    coreModule.name   
  ])
  .component('todoForm', TodoFormComponent);