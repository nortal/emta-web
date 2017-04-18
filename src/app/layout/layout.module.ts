import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../common/ui/ui.module';
import { RouterModule } from '@angular/router';

import { NavigationCtx } from './navigation/navigation.ctx';
import { MenuService } from './menu/menu.service';

import { NavigationComponent } from './navigation';
import { PageHeaderComponent } from './page-header';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GlobalMenuComponent } from './menu';
import { EmtaFooterComponent } from './emta-footer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    RouterModule
  ],
  declarations: [
    NavigationComponent,
    PageHeaderComponent,
    SidebarComponent,
    GlobalMenuComponent,
    EmtaFooterComponent,
  ],
  providers: [
    NavigationCtx,
    MenuService
  ],
  exports: [
    NavigationComponent,
    PageHeaderComponent,
    SidebarComponent,
    GlobalMenuComponent,
    EmtaFooterComponent,
  ]
})
export class LayoutModule {
}
