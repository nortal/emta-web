import { CountryService } from '../country/country.service';
import { OperationalInterestService } from '../operational-interest/operational.interest.service';
import { Subject } from 'rxjs/Subject';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';

import { AppState } from '../app.service';
import { Title } from '../common/ui/title';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'search',  // <search></search>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  // Set our default values
  public localState = {value: ''};
  public firstNameValue: string = 'Vello';
  public codeValue: number;
  public resultList: Object[];
  public searchParams: any = {};
  public foundCountries = new Subject<any[]>();
  public objectTypes = [
    'Isik',
    'Sõiduk'
  ];

  // TypeScript public modifiers
  constructor(public appState: AppState,
              public title: Title,
              private countryService: CountryService,
              private operationalInterestService: OperationalInterestService,
              private router: Router) {
  }

  public ngOnInit() {
    console.log('näidisvormike');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public resetResult() {
    this.resultList = undefined;
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
    console.log('searchParams', this.searchParams);
    this.resultList = this.operationalInterestService.search()
      .filter((item: any) => {
        return !this.searchParams.objectType
          || item.objectType === (this.searchParams.objectType === 'Isik' ? 'PERSON' : 'CAR');
      });
  }

  public searchCountries(term) {
    this.countryService.searchCountries(term).subscribe((x) => this.foundCountries.next(x));
  }

  public addNew() {
    this.router.navigate(['/detail']);
  }
}
