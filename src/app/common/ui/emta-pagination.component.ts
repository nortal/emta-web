import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import { PaginationInstance } from 'ng2-pagination';

@Component({
  selector: 'emta-pagination',
  templateUrl: './emta-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class EmtaPaginationComponent implements OnInit {
  @Input() public config: PaginationInstance;

  public ngOnInit() {
    //
  }
}
