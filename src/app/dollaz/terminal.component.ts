import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Title } from '../common/ui/title';

@Component({
  selector: 'terminal',
  providers: [Title],
  templateUrl: './terminal.component.html'
})
export class TerminalComponent implements OnInit {
  public payment: any;

  constructor(public appState: AppState, public title: Title) {
    //
  }

  public ngOnInit() {
    this.payment = {
      type: 'tkt',
      state: 'CREATED',
      date: new Date(),
      employee: 'Wasnt Me',
      number: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
      deklNumber: '21753',
      dateCreated: '1918',
      aaa: 111,
      referenceNumber: '1',
      bbb: 123,
      amount: 695
    };
  }

  public acceptPayment(timeout: number) {
    this.payment.state = 'PENDING';
    setTimeout(() => {
      this.payment.state = 'ACCEPTED';
      window.location.href = 'http://localhost/tkt/success.html';
    }, timeout*1000);
  }
}
