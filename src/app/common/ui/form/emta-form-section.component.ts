import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'form-section',
  templateUrl: './emta-form-section.component.html',
  inputs: [
    'title'
  ]
})
export class EmtaFormSectionComponent implements OnInit {
  @Input() public expanded: boolean;

  public ngOnInit() {
    if (this.expanded === undefined){
      this.expanded = true;
    }
  }

}
