import {Subject} from "rxjs/Subject";
import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'emta-select-inner',
  templateUrl: 'emta-select-inner.component.html',
})
export class EmtaSelectInnerComponent implements OnInit {

  @Input() searchable = false;
  @Input() items: {
    value: any,
    text: string
  }[] = [];

  @Input() selected: any[] = [];
  @Input() currentIndex = 0;
  @Input() public notFoundText = 'Puudub valik';

  @Output() onInput = new Subject();
  @Output() onSelect = new Subject();
  @Output() onCancel = new Subject();

  @ViewChild('searchInput') public searchInput: any;
  @ViewChild('dropdownMenu') public dropdownMenu: any;

  constructor() {  }

  ngOnInit() {}

  public clearInput() {
    this.searchInput.nativeElement.value = '';
  }

  public focus() {
    if (this.searchable) {
      this.searchInput.nativeElement.focus();
    } else {
      this.dropdownMenu.nativeElement.focus();
    }
  }

  public input(text: string) {
    this.onInput.next(text);
  }

  public select(index) {
    this.onSelect.next(this.items[index].value);
  }

  public cancel() {
    this.onCancel.next();
  }

  public navigate(x: number) {
    this.currentIndex = mod(this.currentIndex + x, this.items.length);
    this.focus();
  }

  public onKey(event) {
    console.log("onkey", event);
    if (event.key === 'ArrowUp') {
      this.navigate(-1);
    } else if (event.key === 'ArrowDown') {
      this.navigate(1);
    } else if (event.key === 'Enter') {
      if (this.items.length > 0) {
        this.select(this.currentIndex);
      }
    } else if (event.key === 'Escape') {
      this.cancel();
    } else if (!this.searchable) {
      this.navigateByFirstChar(event.key);
    }
  }

  private navigateByFirstChar(key: string) {
    if (/^(\w|\d)$/.test(key)) {
      const i = findOrCycleIndex(this.items,
                                 this.currentIndex,
                                 x => (x.text + '').indexOf(key) === 0);
      if (i >= 0) {
        this.currentIndex = i;
      }
    }
  }

  public handleKeydown(event) {
    if (!this.searchable) {
      event.preventDefault();
    }
  }

  public onBlur(event) {
    if (event.relatedTarget && event.relatedTarget.className === 'opt') {
      // Most probably this is a selection in our own dropdown.
      return;
    }
    setTimeout(() => {
      this.cancel();
    }, 200);
  }

  public isSelected(v: any) {
    return this.selected.indexOf(v) > -1;
  }
}

function mod(x, y) {
  return (x + y) % y;
}

function findOrCycleIndex(a: any[],
                          currentIndex: number,
                          predicate: (value: any, index: number) => boolean): number {
  const i = a.findIndex((x, index)=> index > currentIndex && predicate(x, index));
  if (i < 0) {
    return a.findIndex((x, index)=> index <= currentIndex && predicate(x, index));
  } else {
    return i;
  }
}
