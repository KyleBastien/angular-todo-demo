(function() {
  'use strict';

  angular
    .module('todo.todo')
    .controller('TodoController', TodoController);

  TodoController.$inject = ['logger', 'TodoListDataService'];
  function TodoController(logger, TodoListDataService) {
    var vm = this;
    vm.title = 'Admin';
    vm.statusFilter = 'null';

    activate();
    
    /////////////////////

    function activate() {
      return getTodoList().then(function() {
          logger.info('Activated Todo Controller');
      });
    }
    
    function getTodoList() {
      return TodoListDataService.getTodoList()
          .then(function(data) {
              vm.todoList = data;
              return vm.todoList;
          })
    }
  }
})();