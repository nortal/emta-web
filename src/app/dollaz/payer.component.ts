import { Component, Input } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'payer',
  templateUrl: './payer.component.html'
})
export class PayerComponent {
  public payers: any[];
  public payer: any;
  @Input() public onFinish: (payer: any) => any;

  public filter: any = {};

  constructor(public appState: AppState) {
  }

  public search() {
    console.log(this.filter);
    this.payers = [{code: '11', name: 'Krokodil', forname: 'Gena'}];
  }

  public onSelect(selectedPayer: any) {
    this.payer = selectedPayer;
    this.payers = null;
    this.onFinish(this.payer);
  }
}
