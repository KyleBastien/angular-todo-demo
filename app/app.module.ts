import * as angular from 'angular';
import { AppComponent } from './app.component';
import { todoModule } from './todo/todo.module';
import { coreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

export const appModule = angular
  .module('todo', [
    coreModule.name,
    todoModule.name
  ])
  .component('app', AppComponent);

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
})
export class TodoAppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [appModule.name]);
  }
}