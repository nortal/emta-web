import {Pipe, PipeTransform} from '@angular/core';
import { SortInstance } from './sort-instance';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  static _orderByComparator(a:any, b:any):number{
    if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
      if(a.toLowerCase() < b.toLowerCase()) return -1;
      if(a.toLowerCase() > b.toLowerCase()) return 1;
    }
    else{
      if(parseFloat(a) < parseFloat(b)) return -1;
      if(parseFloat(a) > parseFloat(b)) return 1;
    }

    return 0; //equal each other
  }

  transform(input:any, conf: SortInstance) : any {
    if (!Array.isArray(input)) {
      return input;
    }
    if (!conf.field) {
      return input;
    }
    return input.sort((a:any,b:any) => {
      return conf.direction === 'asc' 
        ? SortPipe._orderByComparator(a[conf.field], b[conf.field])
        : -SortPipe._orderByComparator(a[conf.field], b[conf.field]);
    });

  }
}
