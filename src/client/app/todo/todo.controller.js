(function() {
  'use strict';

  angular
    .module('todo.todo')
    .controller('TodoController', TodoController);

  function TodoController() {
    var vm = this;
    vm.title = 'Admin';

    activate();

    function activate() {
      console.log('Activated Todo Controller');
      vm.todoList = [
        {
            title: 'Clean My Room!',
            description: 'Especially the 20 Chipotle bags in the corner.'
        },
        {
            title: 'Write Moar Code!',
            description: 'Cause you just can\'t get enough!'
        },
        {
            title: 'Sleep',
            description: 'Hahahahahahahaha!'
        }
      ];
    }
  }
})();