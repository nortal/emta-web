import { AuthService } from '../../auth/auth.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { NavigationCtx } from './navigation.ctx';

@Component({
  selector: 'navigation',  // <navigation></navigation>
  templateUrl: './navigation.component.html'
})

export class NavigationComponent implements OnInit {
  // Set our default values
  public localState = {value: ''};
  public langs: { code: string, name: string }[];

  constructor(public translate: TranslateService,
              public navigationCtx: NavigationCtx,
              public authService: AuthService) {
  }

  public ngOnInit() {
    this.langs = [
      {code: 'et', name: 'Eesti keeles'},
      {code: 'en', name: 'In English'},
      {code: 'ru', name: 'На русском'}
    ];
  }

  public selectLanguage(event, languageCode) {
    this.translate.use(languageCode);
  }
}
