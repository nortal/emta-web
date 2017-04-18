import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html'
})

export class PageHeaderComponent implements OnInit {
  // Set our default values
  public localState = {value: ''};

  public ngOnInit() {
    console.log('näidisvormike');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
  }
}
