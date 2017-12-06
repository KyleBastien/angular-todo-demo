import { TodoListComponent } from './todo-list.component';
import { ItemStatusFilter } from './item-status.pipe';
import { ItemSearchFilter } from './item-search.pipe';
import { NgModule } from '@angular/core';
import { LoggerModule } from '../../blocks/logger/logger.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ItemStatusFilter,
    ItemSearchFilter,
    TodoListComponent
  ],
  exports: [TodoListComponent],
  entryComponents: [TodoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoggerModule
  ]
})
export class TodoListModule {}
