(function() {
  'use strict';

  angular
    .module('todo.todo')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'todo',
        config: {
          url: '/todo',
          component: 'todo',
          title: 'Todo'
        }
      }
    ];
  }
})();