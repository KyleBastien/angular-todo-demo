import * as angular from 'angular';
import { AppComponent } from './app.component';
import { todoModule } from './todo/todo.module';
import { coreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';

export const appModule = angular
  .module('todo', [
    coreModule.name,
    todoModule.name
  ])
  .component('app', AppComponent)
  .directive('todoFooter', downgradeComponent({component: TodoFooterComponent}));

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  declarations: [TodoFooterComponent],
  entryComponents: [TodoFooterComponent]
})
export class TodoAppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [appModule.name]);
  }
}