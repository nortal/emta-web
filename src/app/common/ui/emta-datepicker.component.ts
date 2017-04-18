import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, forwardRef } from '@angular/core';
import { TranslateService } from "ng2-translate";

@Component({
  selector: 'emta-datepicker',
  templateUrl: './emta-datepicker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmtaDatepickerComponent),
      multi: true
    }
  ]
})
export class EmtaDatepickerComponent implements ControlValueAccessor {
  @Input() public minDate: Date;
  @Input() public maxDate: Date;
  public value: Date;
  public onChange: (event: any) => any = (x) => x;

  public constructor(public translate: TranslateService) {
  }

  public onSelectionDone(event: any, pop: any) {
    setTimeout(() => {
      pop.hide();
    }, 10);
    this.onChange(event);
  }

  public dateText() {
    return this.value ? this.value.toLocaleString(
      this.translate.currentLang, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : '';
  }

  /**
   * Write a new value to the element.
   */
  public writeValue(obj: any) {
    if (obj && obj instanceof Date) {
      this.value = obj;
    }
  }

  /**
   * Set the function to be called when the control receives a change event.
   */
  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  /**
   * Set the function to be called when the control receives a touch event.
   */
  public registerOnTouched(fn: any) {
    console.log('registerOnTouched');
  }
}
