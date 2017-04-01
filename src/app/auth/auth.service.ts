import { Router } from '@angular/router/src/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  public isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private router: Router) {
  }

  public login(): Observable<boolean> {
    return Observable.of(true)
      .delay(1000)
      .do((val) => {
        this.isLoggedIn = true;
      });
  }

  public logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }

  public getRedirectUrl() {
    let res = this.redirectUrl ? this.redirectUrl : '';
    this.redirectUrl = '';
    return res;
  }
}
