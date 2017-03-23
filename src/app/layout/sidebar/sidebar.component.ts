import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };

  public ngOnInit() {
    console.log('näidisvormike');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
  }
}
