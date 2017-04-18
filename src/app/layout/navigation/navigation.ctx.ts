import { Injectable } from '@angular/core';
import { MenuItem } from "../menu/menu-item";

@Injectable()
export class NavigationCtx {
  public currentMenuItem:MenuItem;
  public globalMenuOpen:boolean = false;

  public isOpen():boolean {
    return this.globalMenuOpen;
  }

  public select(menuItem:MenuItem):void {
    this.currentMenuItem = menuItem;
    this.close();
  }

  public open():void {
    this.globalMenuOpen = true;
  }

  public close():void {
    this.globalMenuOpen = false;
  }

  public toggle():void {
    this.globalMenuOpen = !this.globalMenuOpen;
  }
}
