import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'form-feedback',
  templateUrl: './emta-form-feedback.component.html',
  styles: ['position: inline'],
  inputs: [
    'label'
  ]
})
export class EmtaFormFeedbackComponent implements OnInit {
  @Input()
  public level: string;
  public expanded: boolean = true;
  private levels: string[] = ['danger', 'warning'];

  constructor(private elem: ElementRef) {
    //
  }

  public ngOnInit() {
    if (!this.level) {
      this.level = this.searchAttributes(this.levels);
    }

    if (!this.level) {
      this.level = 'danger';
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
