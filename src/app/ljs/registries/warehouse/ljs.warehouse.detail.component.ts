import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ljs-warehouse-detail',
  providers: [],
  templateUrl: './ljs.warehouse.detail.component.html'
})
export class LjsWarehouseDetailComponent {

  constructor(private router: Router, private location: Location) {
  }

  public goBack() {
    this.location.back();
//    this.router.navigate(['../']);
  }
}
