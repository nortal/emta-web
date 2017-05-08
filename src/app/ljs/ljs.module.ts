import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../common/ui/ui.module';
import { RouterModule } from '@angular/router';

import { LjsRegistriesModule } from './registries/ljs.registries.module';
import { LjsRouting } from './ljs.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    RouterModule,
    LjsRouting
  ],
  declarations: [
  ],
  providers: [
  ],
  exports: [
    LjsRegistriesModule
  ]
})
export class LjsModule {
}
