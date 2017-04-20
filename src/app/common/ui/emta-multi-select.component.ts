import {EmtaSelectInnerComponent} from "./emta-select-inner.component";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Component, Input, Output, EventEmitter, OnInit, ViewChild, forwardRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'emta-multi-select',
  templateUrl: './emta-multi-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmtaMultiSelectComponent),
      multi: true
    }
  ]
})
export class EmtaMultiSelectComponent implements ControlValueAccessor, OnInit {
  public show = false;

  public selected: any[] =  null;

  public currentIndex = 0;

  public adata: any[] = [];

  @ViewChild('inner') public inner: any;
  @ViewChild('parentButton') public parentButton: any;

  @Input() public data: any[] = [];
  @Input() public placeholder = 'Vali mitu...';
  @Input() public notFoundText = 'Puudub valik';
  @Input() public numeric = false;
  @Input() public disabled = false;
  @Input() public clearable = true;
  @Input() public selectionChecker: (selection: any[]) => string = null;
  @Input() public maxSelection = null;

  @Input() public displayFunc = (x) => x;
  public onChange = (x) => x;

  public ngOnInit() {
    this.adata = this.data.map((x) => ({
      text: this.displayFunc(x),
      value: x
    }));
    if (this.maxSelection) {
      this.selectionChecker = maxSelectionChecker(this.maxSelection);
    }
  }

  public getSelectedText() {
    if (this.selected) {
      return this.selected.map(x => this.displayFunc(x)).join(',');
    } else {
      return '';
    }
  }

  public open() {
    if (this.disabled) {
      return;
    }
    this.show = true;
    setTimeout(() => this.focus(), 10);
  }

  public close() {
    this.show = false;
    this.parentButton.nativeElement.focus();
  }

  public trigger() {
    if (this.show) {
      this.close();
    } else {
      this.open();
    }
  }

  public focus() {
    this.inner.focus();
  }

  public select(item) {
    let a = this.selected ? this.selected.slice() : null;
    if (!a) {
      a = [];
    }
    const i = a.indexOf(item);
    if (i === -1) {
      a.push(item);
    } else {
      a.splice(i,1);
    }
    if (this.selectionChecker) {
      const error = this.selectionChecker(a);
      if (error) {
        this.showError(error);
        return;
      }
    }
    if (a.length === 0) {
      a = null;
    }
    this.selected = a;
    this.onChange(this.selected);
    this.focus();
  }

  private showError(error: string) {
    this.inner.error = error;
    setTimeout(()=>this.inner.error = null, 1000);
  }

  public clear() {
    this.selected = null;
    this.onChange(this.selected);
  }

  /**
   * Write a new value to the element.
   */
  public writeValue(obj: any) {
    this.selected = obj || null;
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
    // console.log('registerOnTouched');
  };
}

function maxSelectionChecker(x: number) {
  return selection => {
    if (selection && selection.length > x) {
      return `Maksimaalselt ${x} valikut`;
    }
  };
}
