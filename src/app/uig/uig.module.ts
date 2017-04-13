import { NgModule } from '@angular/core';
import { UigComponent , UigButtonsComponent , UigLinksComponent , UigIconsComponent , UigBadgeComponent } from './uig.component';
import { Uig08FormSelectsComponent } from './uig.08.form.selects.component';
import { Uig12MessagesComponent } from './uig.12.messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UiModule } from '../common/ui/ui.module';
import { UigFormValidationsComponent } from './uig.11.form-validations.component';
import { Uig13TooltipComponent } from './uig.13.tooltip.component';
import { UigFormComponent } from './uig.08.form.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UigComponent,
    UigButtonsComponent,
    UigLinksComponent,
    UigIconsComponent,
    UigFormComponent,
    UigBadgeComponent,
    UigFormValidationsComponent,
    Uig08FormSelectsComponent,
    Uig12MessagesComponent,
    Uig13TooltipComponent
  ],
  declarations: [
    UigComponent,
    UigButtonsComponent,
    UigLinksComponent,
    UigIconsComponent,
    UigFormComponent,
    UigBadgeComponent,
    UigFormValidationsComponent,
    Uig08FormSelectsComponent,
    Uig12MessagesComponent,
    Uig13TooltipComponent
  ],
  providers: [],
})
export class UigModule {
}
