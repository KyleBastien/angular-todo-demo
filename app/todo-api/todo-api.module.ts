import * as angular from 'angular'
import { TodoApi } from './todo-api.service';
import { NgModule } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';

@NgModule({
  providers: [
    TodoApi
  ]
})
export class TodoApiModule {}