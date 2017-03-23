import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor } from '@angular/forms';

@Component ({
  selector: 'emta-textinput',
  providers: [],
  templateUrl: './emta-textinput.component.html'
})
export class EmtaTextInputComponent implements /*ControlValueAccessor, */ OnInit {

  @Input()
  public labelText: string;

  @Input()
  public value: string;

  @Output()
  public valueChange: EventEmitter<String> = new EventEmitter<String>();

  @Input()
  public name: string;

  @Input()
  public placeHolder: string;

  @Input()
  public readOnly: boolean;

  @Input()
  public maxLength: number;

  public isValid: boolean = true;

  public ngOnInit() {
    console.log('Label: ' + this.labelText);
    if (!this.placeHolder) {
      this.placeHolder = '';
    }
  }

  public onChange(newValue) {
    this.validateNewValue(newValue);
    if (this.isValid) {
      this.valueChange.emit(newValue);
    }
  }

  private validateNewValue(valueToCheck) {
    if (valueToCheck && valueToCheck.length > this.maxLength) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

}
