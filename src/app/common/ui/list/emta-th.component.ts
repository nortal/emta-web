import { Component, OnInit, Input, HostBinding} from '@angular/core';
import { SortInstance } from './sort-instance';

@Component({
  selector: 'th[sortable]',
  templateUrl: './emta-th.component.html',
  host: {'[class]': 'getHostClass()'}
})
export class EmtaThComponent implements OnInit {
  @Input() public field: any;
  @Input() public sort: SortInstance;

  public getHostClass() {
    return this.sort && this.field === this.sort.field ? this.sort.direction === 'asc' ? 'sorted-ascending' : 'sorted-descending' : '';
  }

  public ngOnInit() {
    if (!this.sort) {
      this.sort = <SortInstance>{};
    }
  }
}

