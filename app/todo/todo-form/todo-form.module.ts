import { TodoFormComponent } from './todo-form.component';
import { NgModule } from '@angular/core';
import { LoggerModule } from '../../blocks/logger/logger.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoFormComponent],
  exports: [TodoFormComponent],
  entryComponents: [TodoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoggerModule
  ]
})
export class TodoFormModule {}