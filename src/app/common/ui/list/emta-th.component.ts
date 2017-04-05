import { Component, OnInit, Input, HostBinding} from '@angular/core';
import { SortInstance } from './sort-instance';

@Component({
  selector: '[sortable]',
  templateUrl: './emta-th.component.html'
})
export class EmtaThComponent implements OnInit {
  @Input() public field: any;
  @Input() public sort: SortInstance;

  public ngOnInit() {
    if (!this.sort) {
      this.sort = <SortInstance>{};
    }
  }
}

