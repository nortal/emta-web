import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor } from '@angular/forms';

export abstract class EmtaBaseInputComponent implements OnInit /* implements ControlValueAccessor, */ {

  @Input()
  public labelText: string;

  @Input()
  public readOnly: boolean;

  @Input()
  public disabled: boolean;

  @Input()
  public name: string;

  @Input()
  public placeHolder: string;

  @Input()
  public value: string;

  @Output()
  public valueChange: EventEmitter<String> = new EventEmitter<String>();

  public isValid: boolean = true;

  protected errorText : string;

  public onChange(newValue) {
    this.validateNewValue(newValue);
    if (this.isValid) {
      this.valueChange.emit(newValue);
    }
  }

  public ngOnInit() {
    if (!this.placeHolder) {
      this.placeHolder = '';
    }
    this.initialize();
  }

  protected abstract  validateNewValue(valueToCheck);

  protected abstract initialize();

}
