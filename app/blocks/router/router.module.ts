import * as angular from 'angular';
import { loggerModule } from '../logger/logger.module';
import { RouterHelperProvider } from './router-helper.provider';

export const routerModule = angular
  .module('blocks.router', [
    'ui.router',
    loggerModule.name
  ])
  .provider('routerHelper', RouterHelperProvider);
