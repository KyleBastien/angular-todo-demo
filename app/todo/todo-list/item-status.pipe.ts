import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../../todo-api/todo-api.service';

@Pipe({
  name: 'ItemStatusFilter',
  pure: false
})
export class ItemStatusFilter implements PipeTransform {
  transform(input: TodoItem[], status: string | boolean) {
    if(status === "null" || !status || !input) {
      return input;
    }
    
    if(status === "false") {
      status = false;
    } else {
      status = true;
    }

    return input.filter(item => item.completed === status);
  }
}