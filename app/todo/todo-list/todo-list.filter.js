(function() {
  'use strict';

  angular
    .module('todo.todo-list')
    .filter('ItemStatusFilter', function() { 
      return ItemStatusFilter; 
    });

  function ItemStatusFilter(input, status) {
    if(status === "null" || !status) {
      return input;
    }
    
    if(status === "false") {
      status = false;
    } else {
      status = true;
    }
    
    var out = [];
    angular.forEach(input, function(item) {
      if(item.completed === status) {
        out.push(item);
      }
    });
    return out;
  }
})();