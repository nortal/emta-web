import {Component}   from '@angular/core';
import {Router}      from '@angular/router';
import {AuthService} from './auth.service';
@Component({
  template: `
    <h2>Sisselogimine</h2>
    <p>{{message}}</p>
    <p>
      <button class="btn btn-success" (click)="login()"  *ngIf="!authService.isLoggedIn">Sisene</button>
      <button class="btn btn-danger" (click)="logout()" *ngIf="authService.isLoggedIn">Väljun</button>
    </p>`
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = (this.authService.isLoggedIn ? 'Sisselogitud' : 'Väljalogitud');
  }

  login() {
    this.message = 'Login sisse...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        let redirect = this.authService.getRedirectUrl();
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
