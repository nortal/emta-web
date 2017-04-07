import { NgModule } from '@angular/core';
import { UigComponent , UigButtonsComponent , UigLinksComponent , UigIconsComponent , UigFormComponent , UigBadgeComponent } from './uig.component';
import { Uig08FormSelectsComponent } from './uig.08.form.selects.component';
import { Uig12MessagesComponent } from './uig.12.messages.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UiModule } from '../common/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
  ],
  exports: [
    UigComponent,
    UigButtonsComponent,
    UigLinksComponent,
    UigIconsComponent,
    UigFormComponent,
    UigBadgeComponent,
    Uig08FormSelectsComponent,
    Uig12MessagesComponent
  ],
  declarations: [
    UigComponent,
    UigButtonsComponent,
    UigLinksComponent,
    UigIconsComponent,
    UigFormComponent,
    UigBadgeComponent,
    Uig08FormSelectsComponent,
    Uig12MessagesComponent
  ],
  providers: [],
})
export class UigModule {
}
