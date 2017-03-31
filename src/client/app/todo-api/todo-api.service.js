(function() {
  'use strict';
  
  angular.module('todo.api')
    .factory('TodoApi', TodoApi);
    
  TodoApi.$inject = [ 'LocalStorage' ];
  function TodoApi(LocalStorage) {
    var todoList = [];
    
    var service = {
      getTodoList: LocalStorage.get,
      insertTodoItem: LocalStorage.insert,
      updateTodoItem: LocalStorage.put,
      deleteTodoItem: LocalStorage.delete,
      clearCompleted: clearCompleted,
    };
    
    return service;
    
    /////////////////////
    
    function clearCompleted() {
      return LocalStorage.clearOnProperty('completed');
    }
  }
  
})();