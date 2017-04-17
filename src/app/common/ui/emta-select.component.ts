import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Component, Input, Output, EventEmitter, OnInit, ViewChild, forwardRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'emta-select',
  templateUrl: './emta-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmtaSelectComponent),
      multi: true
    }
  ]
})
export class EmtaSelectComponent implements ControlValueAccessor, OnInit {
  public show = false;
  public searchTerms = new Subject<string>();

  public initialData = new Subject<any[]>();
  public selected = null;
  public adata: Observable<any>;

  public currentIndex = 0;
  public itemsLength = 1;
  public currentItems = [];

  @ViewChild('searchInput') public searchInput: any;
  @ViewChild('dropdownMenu') public dropdownMenu: any;
  @ViewChild('parentButton') public parentButton: any;

  @Output() public onSearch: Observable<string> = this.searchTerms.debounceTime(300).distinctUntilChanged();
  @Input() public data: any[] = [];
  @Input() public placeholder = 'Leia sobiv...';
  @Input() public notFoundText = 'Puudub valik';
  @Input() public clearLast = true;
  @Input() public foundData: Observable<any[]>;
  @Input() public simple = false;
  @Input() public disabled = false;

  @Input() public displayFunc = (x) => x;
  public onChange = (x) => x;

  public ngOnInit() {
    if (!this.foundData) {
      this.foundData = this.defaultFoundData();
    }
    let merged = Observable.merge(this.initialData, this.foundData);
    merged.subscribe((x) => this.recalcCurrentIndex(x));
    this.adata = merged.map((y) => y.map((x) => ({
      text: this.displayFunc(x),
      value: x
    })));
  }

  public defaultFoundData() {
    let searched = this.searchTerms
    // .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap((term) => term   // switch to new observable each time
        ? this.search(term)
        : Observable.of(this.data))
      .catch((error) => {
        return Observable.of([]);
      });
    return searched;
  }

  public initData() {
    this.initialData.next(this.data);
  }

  public search(term: string) {
    let t = term.toLowerCase();
    return Observable.of(this.data.filter((x) => x.toString().toLowerCase().indexOf(t) >= 0));
  }

  public onInput(term: string) {
    this.searchTerms.next(term);
  }

  public trigger() {
    if (this.disabled) {
      return;
    }
    this.show = !this.show;
    if (this.show) {
      if (this.clearLast) {
        this.initData();
      }
      setTimeout(() => this.focus(), 10);
    } else {
      if (this.clearLast) {
        this.searchInput.nativeElement.value = '';
      }
      this.parentButton.nativeElement.focus();
    }
  }

  public focus() {
    if (this.simple) {
      this.dropdownMenu.nativeElement.focus();
    } else {
      this.searchInput.nativeElement.focus();
    }
  }

  public select(index) {
    this.selected = this.currentItems[index];
    this.onChange(this.selected);
    this.trigger();
  }

  public clear() {
    this.selected = null;
    this.onChange(this.selected);
  }

  public isSelected(el) {
    return el === this.selected;
  }

  public recalcCurrentIndex(items) {
    this.itemsLength = items.length;
    this.currentItems = items;
    let i = items.findIndex((x) => x === this.selected);
    this.currentIndex = i >= 0 ? i : 0;
  }

  public navigate(x: number) {
    this.currentIndex = mod(this.currentIndex + x, this.itemsLength);
    this.focus();
  }

  public onKey(event) {
    if (event.key === 'ArrowUp') {
      this.navigate(-1);
    } else if (event.key === 'ArrowDown') {
      this.navigate(1);
    } else if (event.key === 'Enter') {
      if (this.show && this.currentItems.length > 0) {
        this.select(this.currentIndex);
      }
    } else if (event.key === 'Escape') {
      this.trigger();
    }
  }

  public handleKeydown(event) {
    if (this.simple) {
      event.preventDefault();
    }
  }

  public onBlur(event) {
    if (event.relatedTarget && event.relatedTarget.className === 'opt') {
      // Most probably this is a selection in our own dropdown.
      return;
    }
    setTimeout(() => {
      if (this.show) {
        this.trigger();
      }
    }, 200);
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

function mod(x, y) {
  return (x + y) % y;
}
