import { Component, OnInit, ContentChild, Input} from '@angular/core';
import { EmtaInputComponent } from './emta-input.component';

@Component({
  selector: 'emta-form-row',
  templateUrl: './emta-form-row.component.html',
  inputs: [
    'label',
    'comment'
  ]
})
export class EmtaFormRowComponent implements OnInit {
  @Input() private name: string;
  @ContentChild(EmtaInputComponent) public child;

  public ngOnInit() {
    //
  }

  public  ngAfterContentInit() {
    if (!this.name && !!this.child && !!this.child.name) {
      this.name = this.child.name;
    }
  }

}
