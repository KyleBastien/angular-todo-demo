import * as angular from 'angular';  
import { exceptionModule } from '../blocks/exception/exception.module';
import { loggerModule } from '../blocks/logger/logger.module';
import { routerModule } from '../blocks/router/router.module';
import uiRouter from '@uirouter/angularjs';
import 'angular-sanitize';
import 'angular-animate';
  
export const coreModule = angular
  .module('todo.core', [
    'ngAnimate', 'ngSanitize',
    exceptionModule.name, loggerModule.name, routerModule.name,
    uiRouter
  ])
  .run(['routerHelper', (routerHelper) => {
    let otherwise = '/todo';
    routerHelper.configureStates([
      {
        state: '404',
        config: {
          url: '/404',
          templateUrl: '/app/core/404.html',
          title: '404'
        }
      }
    ], otherwise);
  }])
  .value('config', {
    appErrorPrefix: '[todo Error] ',
    appTitle: 'todo'
  })
  .config(['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider', '$qProvider',
    ($logProvider, routerHelperProvider, exceptionHandlerProvider, $qProvider) => {
      if ($logProvider.debugEnabled) {
        $logProvider.debugEnabled(true);
      }
      exceptionHandlerProvider.configure('[todo Error]');
      routerHelperProvider.configure({ docTitle: 'todo: ' });
      $qProvider.errorOnUnhandledRejections(false);
    }
  ]);