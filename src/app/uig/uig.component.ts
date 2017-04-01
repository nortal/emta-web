import {Component, OnInit} from '@angular/core';
import {RADIO_GROUP_DIRECTIVES} from "ng2-radio-group/ng2-radio-group";

@Component({
  selector: 'app-uig',
  templateUrl: './uig.component.html'
})
export class UigComponent implements OnInit {
  public lego: any = {};

  constructor() {
  }

  ngOnInit() {
  }

}
