import { AuthService } from '../../auth/auth.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'navigation',  // <navigation></navigation>
  templateUrl: './navigation.component.html'
})

export class NavigationComponent implements OnInit {
  // Set our default values
  public localState = {value: ''};

  constructor(private translate: TranslateService, public authService: AuthService) {
  }

  public ngOnInit() {
    console.log('näidisvormike');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
  }

  public selectLanguage(event, languageCode) {
    this.translate.use(languageCode);
  }
}
