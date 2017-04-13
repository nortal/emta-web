import { Tooltip , TooltipOpts } from './tooltip.component';
import { Directive,Inject, ComponentFactoryResolver, AfterContentChecked,Input,ViewContainerRef,ComponentRef} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[tooltip]',
  host: {
    '(mouseover)': 'showTooltip($event)',
    '(mouseleave)' : 'hideTooltip()'
  }
})

export class EmtaTooltipComponent {
  @Input('tooltip') private tooltipContent: string;
  @Input('tooltip-placement') private tooltipPlacement: string = "top";
  private tooltipRef: ComponentRef<Tooltip>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, @Inject(DOCUMENT) private _document:any) {

  }

  public showTooltip(event: any){
    let tooltipFactory = this.componentFactoryResolver.resolveComponentFactory(Tooltip);
    this.tooltipRef = this.viewContainerRef.createComponent(tooltipFactory);
    this._document.querySelector('body').appendChild(this.tooltipRef.location.nativeElement);
    this.tooltipRef.instance.opts = <TooltipOpts>{
      content: this.tooltipContent,
      placement: this.tooltipPlacement,
      target: event.target
    };
  }

  public hideTooltip(){
    if (this.tooltipRef) {
      this.tooltipRef.destroy();
    }
  }

}
