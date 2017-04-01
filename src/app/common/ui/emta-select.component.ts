import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Component, Input, Output, EventEmitter, OnInit, ViewChild, forwardRef} from '@angular/core';
import {NgClass} from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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

  @ViewChild("searchInput") searchInput: any;
  @ViewChild("parentButton") parentButton: any;

  @Input() data: any[] = [];
  @Input() displayFunc = x => x;
  @Input() placeholder = "Leia sobiv...";
  @Input() notFoundText = "Puudub valik"
  @Input() clearLast = true;

  private show = false;

  private searchTerms = new Subject<string>();

  @Output()
  onSearch: Observable<string> = this.searchTerms.debounceTime(300).distinctUntilChanged();
  @Input()
  foundData: Observable<any[]>;

  private initialData = new Subject<any[]>();

  private selected = null;

  private adata: Observable<any>;

  private currentIndex = 0;
  private itemsLength = 1;
  private currentItems = [];

  private onChange = x => x;

  public ngOnInit() {
    if (!this.foundData) {
      this.foundData = this.defaultFoundData();
    }
    let merged = Observable.merge(this.initialData, this.foundData);
    merged.subscribe(x => this.recalcCurrentIndex(x));
    this.adata = merged.map(y => y.map(x => ({
      text: this.displayFunc(x),
      value: x
    })));
  }

  private defaultFoundData() {
    let searched = this.searchTerms
    //.debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        ? this.search(term)
        : Observable.of(this.data))
      .catch(error => {
        return Observable.of([]);
      });
    return searched;
  }

  private initData() {
    this.initialData.next(this.data);
  }

  private search(term: string) {
    let t = term.toLowerCase();
    return Observable.of(this.data.filter(x => x.toString().toLowerCase().indexOf(t) >= 0));
  }

  private onInput(term: string) {
    this.searchTerms.next(term);
  }

  trigger() {
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

  private focus() {
    this.searchInput.nativeElement.focus();
  }

  private select(index) {
    this.selected = this.currentItems[index];
    this.onChange(this.selected);
    this.trigger();
  }

  private clear() {
    this.selected = null;
    this.onChange(this.selected);
  }

  private isSelected(el) {
    return el === this.selected;
  }

  private recalcCurrentIndex(items) {
    this.itemsLength = items.length;
    this.currentItems = items;
    let i = items.findIndex(x => x === this.selected);
    this.currentIndex = i >= 0 ? i : 0;
  }

  private navigate(x: number) {
    this.currentIndex = mod(this.currentIndex + x, this.itemsLength);
    this.focus();
  }

  private onKey(event) {
    if (event.key === "ArrowUp") {
      this.navigate(-1);
    } else if (event.key === "ArrowDown") {
      this.navigate(1);
    } else if (event.key === "Enter") {
      if (this.show && this.currentItems.length > 0) {
        this.select(this.currentIndex);
      }
    } else if (event.key === "Escape") {
      this.trigger();
    }
  }

  onBlur(event) {
    if (event.relatedTarget && event.relatedTarget.className === "opt") {
      //Most probably this is a selection in our own dropdown.
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
  writeValue(obj: any) {
    this.selected = obj || null;
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
  registerOnTouched(fn: any) {
  };
}

function mod(x, y) {
  return (x + y) % y;
}
