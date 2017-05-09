import {
  Component,
  OnInit
} from '@angular/core';
import { NavigationCtx } from '../navigation/navigation.ctx';
import { MenuService } from './menu.service';

@Component({
  selector: 'global-menu',
  templateUrl: './global-menu.component.html'
})
export class GlobalMenuComponent implements OnInit {
  public isDashboard: boolean = false;
  public showLanguages: boolean = false;
  public showClientSelect: boolean = false;

  public languages: { code: string, name: string }[] = [
    {code: 'ru', name: 'На русском'},
    {code: 'en', name: 'In English'}
  ]

  public menuItems: Object[] = [];

  constructor(public navigationCtx: NavigationCtx,
              public menuService: MenuService) {
  }

  public ngOnInit() {
    this.menuItems = this.menuService.search(this.isDashboard);
  }

  public setLanguage(languageCode) {
    console.log('set language ' + languageCode);
  }
}
