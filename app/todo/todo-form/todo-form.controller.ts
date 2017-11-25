export class TodoFormController {
  
    public newItem;
    public statusFilter;
    public searchQuery;
  
    private onItemAdded: ({ item }) => void;
    private onStatusFilterChanged: ({ statusFilter }) => void;
    private onSearchQueryChanged: ({ searchQuery }) => void;
  
    static $inject = ['logger'];
    constructor(private logger) {
      this.newItem = '';
      this.statusFilter = 'null';
      this.searchQuery = null;
    }
  
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
  }