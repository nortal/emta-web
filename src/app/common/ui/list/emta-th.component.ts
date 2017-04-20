import { Component, OnInit, Input } from '@angular/core';
import { SortInstance, SortType } from './sort-instance';

@Component({
  selector: 'th[sortable]',
  templateUrl: './emta-th.component.html',
  host: {'[class]': 'getHostClass()'}
})
export class EmtaThComponent implements OnInit {
  @Input('sortable') public field: any;
  @Input() public sort: SortInstance;

  public getHostClass() {
    return this.sort && this.field === this.sort.field ? this.sort.isAscending() ? 'sorted-ascending' : 'sorted-descending' : '';
  }

  public ngOnInit() {
    if (!this.sort) {
      this.sort = new SortInstance(null,null);
    }
  }

  public setSort(field: any){
    this.sort.field = field;
    this.sort.direction = (this.sort.isAscending() ? SortType.DESC : SortType.ASC);
  }
}

