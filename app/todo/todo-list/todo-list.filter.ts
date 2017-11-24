import * as angular from 'angular';

export const ItemStatusFilter = () => {
  return function(input, status) {
    if(status === "null" || !status) {
      return input;
    }
    
    if(status === "false") {
      status = false;
    } else {
      status = true;
    }
    
    var out = [];
    angular.forEach(input, (item) => {
      if(item.completed === status) {
        out.push((item) as never);
      }
    });
    return out;
  }
}
