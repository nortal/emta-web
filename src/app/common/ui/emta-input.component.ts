import { Component, Host, Input, Output, HostBinding, EventEmitter, OnInit, ViewChild, forwardRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { Validator, NgControl, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'emta-input',
  templateUrl: './emta-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmtaInputComponent),
        multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmtaInputComponent),
        multi: true,
    } 
  ],
  inputs: [
    'placeholder',
    'label',
    'readonly',
    'value',
    'comment',
    'rows',
    'maxlength',
    'minlength',
    'addon',
    'search',
    'required',
    'pattern'
  ]
})
export class EmtaInputComponent implements ControlValueAccessor, OnInit, Validator {
  @Input() public disabled: boolean;
  @Input() public type: string = 'text';
  @Input() @HostBinding('class') class: string;
  @Input() public name: string;

  public val: string;
  public onChange = (x) => x;
  public control: FormControl;

  constructor() {

  }

  public ngOnInit() {
  }

  public isValid(): boolean {
    return this.disabled || !this.control || !this.control.dirty || this.control.valid;
  }

  public writeValue(obj: any) {
    this.val = obj || null;
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    // nothing
  }

  public validate(c: FormControl) {
    this.control = c;
    return null;
  }

}
