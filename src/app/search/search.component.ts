import { CountryService } from '../country/country.service';
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
  public localState = { value: '' };
  public firstNameValue: string = 'Vello';

  private objectTypes = [
    "Isik",
    "Sõiduk"
  ];

  private searchParams: any = {

  };

  private foundCountries = new Subject<any[]>();

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title,
    private countryService: CountryService,
    private router: Router
  ) {}

  public ngOnInit() {
    console.log('näidisvormike');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
    console.log('searchParams', this.searchParams);
  }

  searchCountries(term) {
    this.countryService.searchCountries(term).subscribe(x => this.foundCountries.next(x));
  }

  addNew() {
    this.router.navigate(['/detail']);
  }
}
