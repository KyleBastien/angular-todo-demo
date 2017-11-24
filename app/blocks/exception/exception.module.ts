import * as angular from 'angular';
import { loggerModule } from '../logger/logger.module';
import { exception } from './exception';
import { exceptionHandlerProvider } from './exception-handler.provider';

export const exceptionModule = angular
  .module('blocks.exception', [loggerModule.name])
  .service('exception', exception)
  .provider('exceptionHandler', exceptionHandlerProvider)
  .config(['$provide', ($provide) => {
    $provide.decorator('$exceptionHandler', ['$delegate', 'exceptionHandler', 'logger',
      ($delegate, exceptionHandler, logger) => {
        return (exception, cause) => {
          let appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
          let errorData = { exception: exception, cause: cause };
          exception.message = appErrorPrefix + exception.message;
          $delegate(exception, cause);
          logger.error(exception.message, errorData);
        };
      }
    ]);
  }]);
