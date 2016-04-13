(function() {
  'use strict';

  angular
    .module('todo.todo')
    .controller('TodoController', TodoController);

  TodoController.$inject = ['$http'];
  function TodoController($http) {
    var vm = this;
    vm.title = 'Admin';
    vm.sortBy = 'age';

    activate();
    
    /////////////////////

    function activate() {
      console.log('Activated Todo Controller');
      $http.get('src/client/app/todo/todoList.json').then(function(response) {
         vm.todoList = response.data; 
      });
    }
  }
})();