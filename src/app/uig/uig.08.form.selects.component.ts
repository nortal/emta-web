import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-uig-08-form-selects',
  templateUrl: './uig.08.form.selects.component.html'
})
export class Uig08FormSelectsComponent implements OnInit {
  public items: Array<String> = [
    '2016', '2015', '2014', '2013', '2012'
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
