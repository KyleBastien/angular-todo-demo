(function() {
  'use strict';

  angular
    .module('todo.todo')
    .controller('TodoController', TodoController);

  function TodoController() {
    var vm = this;
    vm.title = 'Admin';
    vm.sortBy = 'age';

    activate();

    function activate() {
      console.log('Activated Todo Controller');
      vm.todoList = [
        {
            title: 'Clean My Room!',
            description: 'Especially the 20 Chipotle bags in the corner.',
            age: 3
        },
        {
            title: 'Write Moar Code!',
            description: 'Cause you just can\'t get enough!',
            age: 2
        },
        {
            title: 'Sleep',
            description: 'Hahahahahahahaha!',
            age: 1
        }
      ];
    }
  }
})();