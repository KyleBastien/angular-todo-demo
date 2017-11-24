import * as angular from 'angular'
import { TodoApi } from './todo-api.service';
  
export const todoApiModule = angular
  .module('todo.api', [  
  ])
  .service('TodoApi', TodoApi);;