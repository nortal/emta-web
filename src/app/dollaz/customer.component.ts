import { Component, Input, OnInit } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
  public customers: any[];
  public customer: any;
  @Input() public onFinish: (customer: any) => any;
  @Input() public filter: any;

  constructor(public appState: AppState) {
  }

  public ngOnInit() {
    if (this.filter) {
      this.search();
    } else {
      this.filter = {};
    }
  }

  public search() {
    console.log(this.filter);
    this.customers = [
      {
        code: '12',
        name: 'Teadmata',
        forname: 'Potsataja',
        address: 'Loomaaed',
        referenceNumber: '217',
        balance: 1.000000000000000000000000000000000001
      }
    ];
  }

  public onSelect(selectedCustomer: any) {
    this.customer = selectedCustomer;
    this.customers = null;
    this.onFinish(this.customer);
  }
}
