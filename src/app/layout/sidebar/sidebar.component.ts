import {
  Component,
  OnInit
} from '@angular/core';
import { NavigationCtx } from "../navigation/navigation.ctx";
import { MenuItem } from "../menu/menu-item";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent {
  constructor(public navigationCtx: NavigationCtx) {
  }

  public getMenuItems():MenuItem[] {
    return this.navigationCtx.currentMenuItem ? this.navigationCtx.currentMenuItem.children : [];
  }
}
