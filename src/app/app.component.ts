/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { TranslateService, TranslatePipe } from 'ng2-translate';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(public appState: AppState,
              translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('et');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('et');
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
