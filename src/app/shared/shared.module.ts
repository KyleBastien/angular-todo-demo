import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerModule } from './logger/logger.module';
import { TodoApiModule } from './todo-api/todo-api.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoggerModule,
    TodoApiModule
  ],
  exports: [],
  providers: [],
})
export class SharedModule {}
