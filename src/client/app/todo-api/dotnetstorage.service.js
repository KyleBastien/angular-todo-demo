(function() {
  'use strict';
  
  var baseUrl = "http://dotnetcoretodoapi.azurewebsites.net/api/todo";
  
  angular.module('todo.api')
    .factory('DotNetApi', DotNetApi);
  
  DotNetApi.$inject = [ '$http', 'logger' ];
  function DotNetApi( $http, logger ) {
    var vm = this;
    
    vm.items = [];
    
    var service = {
      get : get,
      insert: insert,
      put: put,
      delete: remove,
      clearCompleted: clearCompleted
    }
    return service;
    
    /////////////////////
    
    function get() {
      
      return $http.get(baseUrl)
        .then(getItemsComplete)
        .catch(getItemsFailed);
        
      function getItemsComplete(response) {
          return response.data;
      }
      
      function getItemsFailed(error) {
          logger.error('XHR Failed for GET Items '+error.data);
      }
    }
    
    function insert(item) {
      
      return $http.post(baseUrl, item)
        .then(addItemComplete)
        .catch(addItemFailed);
        
      function addItemComplete(response) {
          return response.data;
      }
      
      function addItemFailed(error) {
          logger.error('XHR Failed for POST Items '+error.data);
      }
    }
    
    function put(item) {
        
      var putUrl = baseUrl + '/' + item.Key;
      return $http.put(putUrl, item)
        .then(updateItemComplete)
        .catch(updateItemFailed);
        
      function updateItemComplete(response) {
          return response.data;
      }
      
      function updateItemFailed(error) {
          logger.error('XHR Failed for PUT Items '+error.data);
      }
    }
    
    function remove(item) {
      
      var deleteUrl = baseUrl + '/' + item.Key;
      return $http.delete(deleteUrl, item)
        .then(deleteItemComplete)
        .catch(deleteItemFailed);
        
      function deleteItemComplete(response) {
          return response.data;
      }
      
      function deleteItemFailed(error) {
          logger.error('XHR Failed for DELETE Items '+error.data);
      }
    }
    
    function clearCompleted() {
      
      var clearCompletedUrl = baseUrl + '/RemoveCompelted';
      return $http.delete(clearCompletedUrl)
        .then(clearCompletedComplete)
        .catch(clearCompletedFailed);
        
      function clearCompletedComplete(response) {
          return response.data;
      }
      
      function clearCompletedFailed(error) {
          logger.error('XHR Failed for DELETE Completed Items '+error.data);
      }
    }
    
  }
  
})();