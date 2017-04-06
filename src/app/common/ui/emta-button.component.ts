import { Component, Input, Output, HostBinding, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'emta-button',
  templateUrl: './emta-button.component.html',
  inputs: [
  ]
})
export class EmtaButtonComponent implements OnInit {
  @Input() public type: string;
  @Input() public disabled: string;
  @Input() public style: string;
  @Input() public tooltip: string;
  @Input() public icon: string;

  private types: string[] = ['success','danger','info','dark','light'];
  private icons: string[] = ['with-plus','multiple-options', 'save', 'cancel', 'logout'];
  private styles: string[] = ['round','square', 'small'];
  public class: string = 'btn';

  constructor(private elem: ElementRef) {
    //
  }

  public ngOnInit() {
    if (!this.type) {
      this.type = this.searchAttributes(this.types);
    }
    this.class += ' btn-' + this.type;

    if (!this.style) {
      this.style = this.searchAttributes(this.styles);
    }
    if (this.style === 'square') {
      this.class += ' btn-square';
    }
    if (this.style === 'small') {
      this.class += ' btn-sm';
    }

    if (this.icon && this.icons.indexOf(this.icon) >= 0) {
      this.class += ' btn-' + this.icon;
    }

    if(this.disabled === 'disabled' || typeof this.disabled !== 'undefined' && !this.disabled) {
      this.class += ' disabled';
    }

  }

  private searchAttributes(allowedKeys: string[]): string {
    for(let key in allowedKeys) {
      if(this.elem.nativeElement.attributes[allowedKeys[key]]){
        return allowedKeys[key];
      }
    };
    return '';
  }

}
