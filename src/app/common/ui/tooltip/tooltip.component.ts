import { HostBinding, HostListener, Component, ElementRef } from '@angular/core';
@Component({
  templateUrl: './tooltip.component.html'
})

export class Tooltip {
  public opts: TooltipOpts;
  public location: {left: number, top: number} = {left: -100, top: -100};

  constructor(private elRef:ElementRef){
  }

  public reposition() {
    let tt = this.elRef.nativeElement.querySelector('.tooltip');
    let self = {
      width: tt.offsetWidth,
      height: tt.offsetHeight
    }
    let targetRect = this.opts.target.getBoundingClientRect();
    let target = {
      left: pageXOffset + targetRect.left,
      top:  pageYOffset + targetRect.top,
      width: targetRect.width,
      height: targetRect.height
    }

    switch (this.opts.placement) {
      case "top":
        this.location = {
        left: target.left + (target.width / 2) - (self.width / 2),
        top: target.top - self.height
      };
      break;
      case "left":
        this.location = {
        left: target.left - self.width,
        top: target.top + (target.height / 2) - (self.height / 2)
      };
      break;
      case "bottom":
        this.location = {
        left: target.left + (target.width / 2) - (self.width / 2),
        top: target.top + target.height
      };
      break;
      case "right":
        this.location = {
        left: target.left + target.width,
        top: target.top + (target.height / 2) - (self.height / 2)
      };
      break;
    }
  }

  ngAfterViewInit() {
    setTimeout(_ => this.reposition());
  }
}

export class TooltipOpts {
  target: any; //nativeElement
  content: string;
  placement: string = "top";
  class: string;
}
