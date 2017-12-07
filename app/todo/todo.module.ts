import { TodoComponent } from './todo.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { NgModule } from '@angular/core';
import { TodoFooterModule } from './todo-footer/todo-footer.module';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoFormModule } from './todo-form/todo-form.module';

@NgModule({
  imports: [
    TodoFooterModule,
    TodoListModule,
    TodoFormModule,
  ],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule {}
