import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor } from '@angular/forms';

export abstract class EmtaBaseInputComponent /* implements ControlValueAccessor, */ {

  @Input()
  public readOnly: boolean;

  @Input()
  public disabled: boolean;

  @Input()
  public name: string;

  @Input()
  public placeHolder: string;

  @Output()
  public valueChange: EventEmitter<String> = new EventEmitter<String>();

  public isValid: boolean = true;

  public onChange(newValue) {
    this.validateNewValue(newValue);
    if (this.isValid) {
      this.valueChange.emit(newValue);
    }
  }

  protected abstract  validateNewValue(valueToCheck);

}
