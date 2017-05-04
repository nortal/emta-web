import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Title } from '../common/ui/title';

@Component({
  selector: 'payment',
  providers: [Title],
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {
  public payer: any;
  public customer: any;
  public debts: any[];
  public payment: any;

  constructor(public appState: AppState,
              public title: Title) {
  }

  public ngOnInit() {
    console.log('initialized');
  }

  public setPayer(payer: any) {
    this.payer = payer;
  }

  public setCustomer(customer: any) {
    this.customer = customer;
    this.searchDepts();
  }

  public searchDepts() {
    this.debts = [
      {
        type: 'TD',
        number: '(-1)^0.5',
        deklNumber: '21753',
        date: new Date(),
        state: 'A',
        dateCreated: '1918',
        aaa: 111,
        referenceNumber: '1',
        bbb: 1.1 / 1.1
      }
    ];
  }

  public composePayment(doc: any) {
    this.payment = doc;
    this.payment.state = null;
  }

  public savePayment() {
    this.payment.state = 'CREATED';
    this.payment.date = new Date();
    this.payment.employee = 'Wasnt Me';
    this.payment.number = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  public acceptPayment(timeout: number) {
    setTimeout(() => {
      this.payment.state = 'ACCEPTED';
      this.payment = null;
    }, timeout*1000);
  }
}
