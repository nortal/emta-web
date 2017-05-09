import { Component, Input, Output, EventEmitter, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'accordion-block',
  templateUrl: './accordion.component.html'
})
export class AccordionBlockComponent implements OnInit {
  @Input() public expanded: boolean = false;

  public ngOnInit() {
    //
  }

}
