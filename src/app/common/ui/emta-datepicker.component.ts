import {ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import {Component, Input, forwardRef} from '@angular/core';

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
  value: Date;
  private onChange: (event: any) => any = x => x;

  @Input() public minDate: Date;
  @Input() public maxDate: Date;

  onSelectionDone(event: any, pop: any) {
    setTimeout(() => {pop.hide()}, 10);
    this.onChange(event);
  }

  dateText() {
    return this.value ? this.value.toLocaleString('et', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '';
  }
  /**
   * Write a new value to the element.
   */
  writeValue(obj: any) {
    if (obj && obj instanceof Date) {
      this.value = obj;
    }
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any) {}
}