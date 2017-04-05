import { Component, Input, Output,HostBinding, EventEmitter, OnInit, ViewChild, forwardRef } from '@angular/core';
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
    'disabled',
    'value',
    'comment',
    'rows',
    'maxlength',
    'addon',
    'search'
  ]
})
export class EmtaInputComponent implements ControlValueAccessor, OnInit {
  @Input() public type: string = 'text';
  @Input() @HostBinding('class') class: string;
  @Input() public name: string;

  public val: string;
  public onChange = (x) => x;


  public ngOnInit() {
    if (!this.class) {
      this.class = this.type === 'radio' ? '' : 'col-xs-20 col-md-12'; 
    }
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

}
