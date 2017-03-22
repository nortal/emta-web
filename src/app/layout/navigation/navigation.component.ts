import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'navigation',  // <navigation></navigation>
  templateUrl: './navigation.component.html'
})

export class NavigationComponent implements OnInit {
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
