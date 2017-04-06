import { Directive, Input, OnInit, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[gray], a[blue], a[orange]'
})
export class EmtaLinkComponent implements OnInit {
  private colors: string[] = ['gray', 'blue', 'orange'];
  private sizes: string[] = ['small'];

  @Input() public icon: string;
  @HostBinding('class') class: string = '';
  @Input() @HostBinding('target') target: string = '';
  @Input() @HostBinding('href') href: string = '';

  constructor(private elem: ElementRef) {
    //
  }

  public ngOnInit() {
    let color = this.searchAttributes(this.colors);
    if (color) {
      this.class += 'link-' + color;
    }
    let size = this.searchAttributes(this.sizes);
    if (size) {
      this.class += ' link-' + size;
    }

    if (this.icon) {
      this.class += ' icon-' + this.icon;
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
