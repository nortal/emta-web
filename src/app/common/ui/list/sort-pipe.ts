import { Pipe, PipeTransform } from '@angular/core';
import { SortInstance, SortType } from './sort-instance';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  private static _orderByComparator(a: any, b: any): number {
    if (typeof a === 'string' && typeof b === 'string') {
      if (a.toLowerCase() < b.toLowerCase()) { return -1; }
      if (a.toLowerCase() > b.toLowerCase()) { return 1; }
    } else {
      if (a < b) { return -1; }
      if (a > b) { return 1; }
    }

    return 0;
  }

  public transform(input: any, conf: SortInstance): any {
    if (!Array.isArray(input)) {
      return input;
    }
    if (!conf.field) {
      return input;
    }
    return input.sort((a: any, b: any) => {
      return conf.direction === SortType.ASC
        ? SortPipe._orderByComparator(a[conf.field], b[conf.field])
        : -SortPipe._orderByComparator(a[conf.field], b[conf.field]);
    });

  }
}
