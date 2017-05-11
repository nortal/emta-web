import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../../common/ui/ui.module';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';

import { LjsWarehouseComponent } from './warehouse';
import { WarehouseService } from './warehouse/ljs.warehouse.service';
import { LjsWarehouseDetailComponent } from './warehouse/ljs.warehouse.detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    RouterModule,
    Ng2PaginationModule
  ],
  declarations: [
    LjsWarehouseComponent,
    LjsWarehouseDetailComponent
  ],
  providers: [
      WarehouseService
  ],
  exports: [
    LjsWarehouseComponent
  ]
})
export class LjsRegistriesModule {
}
