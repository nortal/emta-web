import { Component, Input, Output, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'badge',
  templateUrl: './emta-badge.component.html'
})
export class EmtaBadgeComponent implements OnInit {
  @Input() public level: string;
  @Input() public style: string;

  private levels: string[] = ['success', 'danger', 'info', 'warning', 'default'];

  constructor(private elem: ElementRef) {
    //
  }

  public ngOnInit() {
    if (!this.level) {
      this.level = this.searchAttributes(this.levels);
    }
    if (!this.level) {
      this.level = 'default';
    }
  }

  private searchAttributes(allowedKeys: string[]): string {
    for (let key in allowedKeys) {
      if (this.elem.nativeElement.attributes[allowedKeys[key]]) {
        return allowedKeys[key];
      }
    }
    return '';
  }
}
