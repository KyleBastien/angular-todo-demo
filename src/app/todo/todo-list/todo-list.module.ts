import { TodoListComponent } from './todo-list.component';
import { ItemStatusFilter } from './item-status.pipe';
import { ItemSearchFilter } from './item-search.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ItemStatusFilter,
    ItemSearchFilter,
    TodoListComponent
  ],
  exports: [TodoListComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class TodoListModule {}
