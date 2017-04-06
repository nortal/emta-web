import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  host: {
    'data-toggle': 'tooltip',
    'data-tooltip-placement': "top",
    'data-tooltip-class': "tooltip-icon",
    'data-tooltip-trigger': "hover focus",
    'data-animation': 'false',
    'data-original-title': '',
    'data-tooltip-title': "tooltip"
  }
})

export class EmtaTooltipComponent implements OnInit {
  @Input() public tooltip: string;

  constructor() {
    //
  }

  public ngOnInit() {
  }

}
