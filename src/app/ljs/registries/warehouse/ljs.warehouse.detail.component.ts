import {
  Component, OnInit
} from '@angular/core';
import {
  Router, ActivatedRoute
} from '@angular/router';
import { Location } from '@angular/common';
import { WarehouseService } from './ljs.warehouse.service';

@Component({
  selector: 'ljs-warehouse-detail',
  providers: [],
  templateUrl: './ljs.warehouse.detail.component.html'
})
export class LjsWarehouseDetailComponent implements OnInit {
  public data: any;

  constructor(private warehouseService: WarehouseService, private route: ActivatedRoute, private location: Location) {
  }

  public ngOnInit() {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.warehouseService.loadWarehouse(id).then((data) => {
      console.log(data);
      this.data = data;
    });
  }

  public goBack() {
    this.location.back();
  }

  public saveData() {
    console.log(this.data);
    this.warehouseService.saveWarehouse(this.data).
    then((result) => this.displayOk()).catch((error) => this.displayError(error));
  }

  private displayOk() {
    console.log('OK!');
  }

  private displayError(error) {
    console.log('Error!', error);
  }
}
