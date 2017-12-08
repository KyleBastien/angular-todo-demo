import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../../shared/todo-api/todo-api.service';

@Pipe({
  name: 'ItemSearchFilter',
  pure: false
})
export class ItemSearchFilter implements PipeTransform {
  transform(input: TodoItem[], searchQuery: string) {
    if(!input || !searchQuery || searchQuery === '') {
      return input;
    }

    return input.filter(item => item.title.includes(searchQuery));
  }
}