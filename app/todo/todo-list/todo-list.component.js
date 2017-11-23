(function() {
    'use strict';

    // Usage:
    // <todo-list items="$ctrl.items"></todo-list>
    // Creates:
    // A List of Todo Items that are displayed

    angular
      .module('todo.todo-list')
      .component('todoList', {
        templateUrl: '/app/todo/todo-list/todo-list.html',
        controller: TodoListController,
        controllerAs: '$ctrl',
        bindings: {
          items: '<',
          searchQuery: '<',
          statusFilter: '<',
          onUpdate: '&',
          onRemove: '&'
        },
      });

    TodoListController.$inject = ['logger'];
    function TodoListController(logger) {
      var $ctrl = this;

      $ctrl.updateTodoItem = updateTodoItem;
      $ctrl.removeTodoItem = removeTodoItem;
      
      $ctrl.$onInit = onInit;

      ////////////////

      function onInit() {
        logger.info('Activated Todo List Component');
      }

      function updateTodoItem(item) {
        $ctrl.onUpdate({
          item: item
        });
      }

      function removeTodoItem(item) {
        $ctrl.onRemove({
          item: item
        });
      }
    }
})();