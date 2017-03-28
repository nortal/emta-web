import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor } from '@angular/forms';
import {EmtaBaseInputComponent} from "./emta-baseinput.component";

@Component ({
  selector: 'emta-textinput',
  providers: [],
  templateUrl: './emta-textinput.component.html'
})
export class EmtaTextInputComponent extends EmtaBaseInputComponent implements /*ControlValueAccessor, */ OnInit {

  @Input()
  public labelText: string;

  @Input()
  public value: string;

  @Input()
  public maxLength: number;

  public ngOnInit() {
    console.log('Label: ' + this.labelText);
    if (!this.placeHolder) {
      this.placeHolder = '';
    }
  }

  protected validateNewValue(valueToCheck) {
    if (valueToCheck && valueToCheck.length > this.maxLength) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

}
