import * as angular from 'angular';
import { Logger } from './logger';
import { NgModule } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';

export const loggerModule = angular
  .module('blocks.logger', [])
  .factory('logger', downgradeInjectable(Logger));

@NgModule({
  providers: [
    Logger
  ]
})
export class LoggerModule {}
