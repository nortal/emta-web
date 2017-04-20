import { Component, OnInit, Input } from '@angular/core';
import { PaginationInstance } from 'ng2-pagination';

@Component({
  selector: 'emta-table',
  templateUrl: './emta-table.component.html',
  inputs: [
    'class'
  ]
})
export class EmtaTableComponent implements OnInit {
  @Input('pagination') pager: PaginationInstance;

  public ngOnInit() {
    //
  }
}

