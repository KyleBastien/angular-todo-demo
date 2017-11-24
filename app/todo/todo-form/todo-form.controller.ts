export class TodoFormController {
  
    public newItem = '';
    public statusFilter = 'null';
    public searchQuery = null;
  
    private onItemAdded: ({ item }) => void;
    private onStatusFilterChanged: ({ statusFilter }) => void;
    private onSearchQueryChanged: ({ searchQuery }) => void;
    private onClearCompletedItem: () => void;
  
    static $inject = ['logger'];
    constructor(private logger) {}
  
    public $onInit() {
      this.logger.info('TodoForm Component Activated');
    }
  
    public insertTodoItem() {
      this.onItemAdded({
        item: this.newItem
      });
    }
  
    public statusFilterChanged() {
      this.onStatusFilterChanged({
        statusFilter: this.statusFilter
      });
    }
  
    public searchQueryChanged() {
      this.onSearchQueryChanged({
        searchQuery: this.searchQuery
      })
    }
  
    public clearCompletedItems() {
      this.onClearCompletedItem();
    }
  }