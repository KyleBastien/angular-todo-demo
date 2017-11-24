import * as angular from 'angular';
import { AppController } from './app.controller';

// Usage:
// <app></app>
// Creates:
// App Component that displays the Todo App

export const AppComponent: angular.IComponentOptions = {
  templateUrl: '/app/app.html',
  controller: AppController,
}