import { Component, Input, Output, EventEmitter, OnInit, ViewChild, forwardRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'emta-input',
  templateUrl: './emta-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmtaInputComponent),
      multi: true
    }
  ],
  inputs: [
    'placeholder',
    'label',
    'readonly',
    'value'
  ]
})
export class EmtaInputComponent implements ControlValueAccessor, OnInit {
  @Input() public name: string;
  @Input() public type: string;

  public val: string;
  public onChange = x => x;


  public ngOnInit() {
  }

  /**
   *    * Write a new value to the element.
   *       */
  writeValue(obj: any) {
    this.val = obj || null;
  }

  /**
   *    * Set the function to be called when the control receives a change event.
   *       */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  /**
   *    * Set the function to be called when the control receives a touch event.
   *       */
  registerOnTouched(fn: any) {
  }

}
