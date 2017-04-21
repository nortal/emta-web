import { NgModule } from '@angular/core';
import { UigComponent , UigButtonsComponent , UigLinksComponent , UigIconsComponent , UigBadgeComponent } from './uig.component';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { Uig08FormSelectsComponent } from './uig.08.form.selects.component';
import { Uig12MessagesComponent } from './uig.12.messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UiModule } from '../common/ui/ui.module';
import { UigFormValidationsComponent } from './uig.11.form-validations.component';
import { Uig13TooltipComponent } from './uig.13.tooltip.component';
import { UigFormComponent } from './uig.08.form.component';
import { UigFormTypesComponent } from './uig.08.formtypes.component';
import { UigTablesComponent } from './uig.09.tables.component';
import { UigComplexTablesComponent } from './uig.09.complxtables.component';
import { Ng2PaginationModule } from 'ng2-pagination';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PaginationModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot()
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
    Uig13TooltipComponent,
    UigFormTypesComponent,
    UigTablesComponent,
    UigComplexTablesComponent
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
    Uig13TooltipComponent,
    UigFormTypesComponent,
    UigTablesComponent,
    UigComplexTablesComponent
  ],
  providers: [],
})
export class UigModule {
}
