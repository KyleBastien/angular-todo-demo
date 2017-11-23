(function() {
  'use strict';

  // Usage:
  // <app></app>
  // Creates:
  // App Component that displays the Todo App

  angular
    .module('todo')
    .component('app', {
      templateUrl: '/app/app.html',
      controller: AppController,
      controllerAs: '$ctrl',
      bindings: {
      },
    });

  AppController.$inject = [];
  function AppController() {
    var $ctrl = this;
  }
})();