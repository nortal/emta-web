import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {ControlValueAccessor} from '@angular/forms';
import {EmtaBaseInputComponent} from './emta-baseinput.component';

@Component({
  selector: 'emta-numberinput',
  providers: [],
  templateUrl: './emta-textinput.component.html'
})
export class EmtaNumberInputComponent extends EmtaBaseInputComponent {


  initialize() {
    this.errorText = 'Lubatud on ainult arvuline väärtus';
    if (this.placeHolder === '') {
      this.placeHolder = 'Arvuline väärtus';
    }
  }

  validateNewValue(valueToCheck) {
    if (valueToCheck && isNaN(valueToCheck)) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

}
