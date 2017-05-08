import { Component, OnInit, ContentChild, Input } from '@angular/core';
import { EmtaInputComponent } from '../emta-input.component';

@Component({
  selector: 'form-row',
  templateUrl: './emta-form-row.component.html',
  inputs: [
    'label',
    'comment',
    'name'
  ]
})
export class EmtaFormRowComponent implements OnInit {
  @ContentChild(EmtaInputComponent)
  public child;

  public name: string;
  public comment: string;
  public label: string;

  public ngOnInit() {
    //
  }

  public ngAfterContentInit() {
    if (!this.name && !!this.child && !!this.child.name) {
      this.name = this.child.name;
    }
  }

}
