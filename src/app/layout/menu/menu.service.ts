import { Injectable } from '@angular/core';
import { menuBase, menuDashboard } from './mock-menu';
import { MenuItem } from './menu-item';

@Injectable()
export class MenuService {
  public search(isDashboard: boolean): MenuItem[] {
    return isDashboard ? menuDashboard : menuBase;
  }
}
