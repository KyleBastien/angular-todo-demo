(function() {
    'use strict';
    
    angular
    .module('todo.todo')
    .factory('TodoListDataService', TodoListDataService);

    TodoListDataService.$inject = ['$http', 'logger'];
    function TodoListDataService($http, logger) {
        
        return {
            getTodoList: getTodoList
        };
        
        /////////////////////
        
        function getTodoList() {
            return $http.get('src/client/app/todo/todoList.json')
                .then(getTodoListComplete)
                .catch(getTodoListFailed);
            
            function getTodoListComplete(response) {
                return response.data;
            }
            
            function getTodoListFailed(error) {
                logger.error('XHR Failed for getTodoList.' + error.data);
            }
        }
        
    }
})();