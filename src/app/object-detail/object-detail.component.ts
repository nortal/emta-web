import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';


@Component({
  selector: 'object-detail',
  providers: [
  ],
  templateUrl: './object-detail.component.html'
})
export class ObjectDetailComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['../']);
  }
}
