import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'emta-footer',
  templateUrl: './emta-footer.component.html'
})
export class EmtaFooterComponent implements OnInit {
  // Set our default values
  public localState = {value: ''};
  // TypeScript public modifiers
  // constructor();

  public ngOnInit() {
    console.log('näidisvormike');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
  }
}
