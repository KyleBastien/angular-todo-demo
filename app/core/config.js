(function() {
  'use strict';

  var core = angular.module('todo.core');

  var config = {
    appErrorPrefix: '[todo Error] ',
    appTitle: 'todo'
  };

  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider', '$qProvider'];
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, $qProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
    $qProvider.errorOnUnhandledRejections(false);
  }

})();