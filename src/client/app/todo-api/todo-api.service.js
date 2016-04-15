(function() {
  'use strict';
  
  angular.module('todo.api')
    .factory('TodoApi', TodoApi);
    
    TodoApi.$inject = [ '$injector' ];
    function TodoApi($injector) {
        var todoList = [];
        
        // The reason that I didn't just inject this service directly into TodoApi
        // is because this is going to scale out to work with multiple storage services
        // for now though we are just always using the LocalStorage service. You could
        // imagine that this could instead be a backend API storage service. This model
        // now allows me to have one single service that I inject into Controllers for
        // interacting with a TodoList, but many ways in which that more generic data is
        // stored.
        var storageService = $injector.get('LocalStorage');
        
        var service = {
            getTodoList: storageService.get,
            insertTodoItem: storageService.insert,
            updateTodoItem: storageService.put,
            deleteTodoItem: storageService.delete,
            clearCompleted: clearCompleted
        };
        return service;
        
        /////////////////////
        
        function clearCompleted() {
            return storageService.clearOnProperty('completed');
        }
    }
  
})();