import * as angular from 'angular'
import { TodoApi } from './todo-api.service';
import { NgModule } from '@angular/core';
  
export const todoApiModule = angular
  .module('todo.api', [  
  ])
  .service('TodoApi', TodoApi);

@NgModule({
  providers: [
    { provide: TodoApi, useFactory: todoApiFactory, deps: ['$injector'] }
  ]
})
export class TodoApiModule {}

export function todoApiFactory($injector: angular.auto.IInjectorService): TodoApi {
  return $injector.get('TodoApi') as TodoApi;
}