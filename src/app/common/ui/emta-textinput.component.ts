import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor } from '@angular/forms';
import { EmtaBaseInputComponent } from './emta-baseinput.component';

@Component ({
  selector: 'emta-textinput',
  providers: [],
  templateUrl: './emta-textinput.component.html'
})
export class EmtaTextInputComponent extends EmtaBaseInputComponent /* implements ControlValueAccessor, */ {

  @Input()
  public maxLength: number;

  initialize() {
    this.errorText = 'Liiga pikk tekst (lubatud kuni ' + this.maxLength + ' sümbolit)';
  }

  validateNewValue(valueToCheck) {
    if (valueToCheck && valueToCheck.length > this.maxLength) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

}
