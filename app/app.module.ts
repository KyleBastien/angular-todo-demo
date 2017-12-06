import * as angular from 'angular';
import { AppComponent } from './app.component';
import { todoModule, TodoModule } from './todo/todo.module';
import { coreModule, CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { TodoApiModule } from './todo-api/todo-api.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appModule = angular
  .module('todo', [
    coreModule.name,
    todoModule.name
  ])
  .component('app', AppComponent);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UpgradeModule,
    CoreModule,
    TodoApiModule,
    TodoModule
  ],
})
export class TodoAppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [appModule.name]);
  }
}