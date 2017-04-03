import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'emta-form-row',
  templateUrl: './emta-form-row.component.html',
  inputs: [
    'name',
    'label',
    'comment'
  ]
})
export class EmtaFormRowComponent implements OnInit {

  public ngOnInit() {
    // nothing on init
  }

}
