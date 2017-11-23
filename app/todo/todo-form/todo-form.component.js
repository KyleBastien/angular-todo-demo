(function() {
  'use strict';

  // Usage:
  // <todo-form on-search-query-changed="$ctrl.onSearchQueryChanged(searchQuery)"
  //   on-status-filter-changed="$ctrl.onStatusFilterChanged(statusFilter)"
  //   on-item-added="$ctrl.onItemAdded(item)"
  //   on-clear-completed-item="$ctrl.clearCompletedItems()"></todo-form>
  // Creates:
  // The form to create and filter todo's, plus clear completed todo's.

  angular
    .module('todo.todo-form')
    .component('todoForm', {
      templateUrl: '/app/todo/todo-form/todo-form.html',
      controller: TodoFormController,
      controllerAs: '$ctrl',
      bindings: {
        onSearchQueryChanged: '&',
        onStatusFilterChanged: '&',
        onItemAdded: '&',
        onClearCompletedItem: '&'
      },
    });

  TodoFormController.$inject = ['logger'];
  function TodoFormController(logger) {
    var $ctrl = this;

    $ctrl.newItem = '';
    $ctrl.statusFilter = 'null';
    $ctrl.searchQuery = null;

    $ctrl.insertTodoItem = insertTodoItem;
    $ctrl.statusFilterChanged = statusFilterChanged;
    $ctrl.searchQueryChanged = searchQueryChanged;
    $ctrl.clearCompletedItems = clearCompletedItems;
    $ctrl.$onInit = onInit;

    function onInit() {
      logger.info('TodoForm Component Activated');
    }

    function insertTodoItem() {
      $ctrl.onItemAdded({
        item: $ctrl.newItem
      });
    }

    function statusFilterChanged() {
      $ctrl.onStatusFilterChanged({
        statusFilter: $ctrl.statusFilter
      });
    }

    function searchQueryChanged() {
      $ctrl.onSearchQueryChanged({
        searchQuery: $ctrl.searchQuery
      })
    }

    function clearCompletedItems() {
      $ctrl.onClearCompletedItem();
    }
  }
})();