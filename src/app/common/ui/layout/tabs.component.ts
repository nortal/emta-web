import { Component, Input, Output, EventEmitter, OnInit, HostBinding } from '@angular/core';
import { Tab } from './tab';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {
  public layouts: string[] = ['horizontal', 'vertical', 'steps']
  @Input() public tabs: Tab[];
  @Input() public layout: string;
  @Input() public showBreadcrumb: boolean;
  @HostBinding('class') public clazz: string;

  @Output() public tabSwitch: EventEmitter<Tab> = new EventEmitter<Tab>();

  public ngOnInit() {
    if (!this.layout) {
      this.layout = this.layouts[0];
    }
    if (this.showBreadcrumb === undefined) {
      this.showBreadcrumb = this.layout === 'horizontal';
    }
    if (this.layout === 'vertical') {
      this.clazz = 'nav-vertical-wrapper';
    }
  }

  public getTabNames() {
    return this.tabs.map((t) => t.name);
  }

  public onTabSelect(tab: Tab, $event) {
    this.tabs.forEach((t) => t.selected = false);
    tab.selected = true;
    this.tabSwitch.emit(tab);
  }
}
