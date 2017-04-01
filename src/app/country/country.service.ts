import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { countries } from './mock-countries';

@Injectable()
export class CountryService {

  private data = countries.map((c) => c.substr(3));

  public searchCountries(term: string): Observable<string[]> {
    let res = new Subject<string[]>();
    setTimeout(() => res.next(this.data.filter((x) => x.indexOf(term) >= 0)), 500);
    return res;
  }
}
