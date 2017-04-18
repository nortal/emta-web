import { EmtaDatepickerComponent } from './emta-datepicker.component';
import { EmtaSelectComponent } from './emta-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmtaTextInputComponent } from './emta-textinput.component';
import { EmtaNumberInputComponent } from './emta-numberinput.component';
import { EmtaInputComponent } from './emta-input.component';
import { EmtaPaginationComponent } from './list/emta-pagination.component';
import { EmtaThComponent } from './list/emta-th.component';
import { TranslateModule } from 'ng2-translate';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { Ng2PaginationModule } from 'ng2-pagination';
import { SortPipe } from './list/sort-pipe';
import { EmtaTableComponent } from './list/emta-table.component';
import { EmtaButtonComponent } from './emta-button.component';
import { EmtaLinkComponent } from './emta-link.component';
import { EmtaTooltipComponent } from './tooltip/emta-tooltip.component';
import { Tooltip } from './tooltip/tooltip.component';
import { EmtaBadgeComponent } from './emta-badge.component';
import { EmtaFormRowComponent, EmtaFormSectionComponent, EmtaFormFeedbackComponent } from './form';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    Ng2PaginationModule,
    DatepickerModule.forRoot(),
    PopoverModule.forRoot()
  ],
  exports: [
    EmtaTextInputComponent,
    EmtaInputComponent,
    EmtaFormRowComponent,
    EmtaNumberInputComponent,
    EmtaSelectComponent,
    EmtaDatepickerComponent,
    EmtaPaginationComponent,
    EmtaThComponent,
    EmtaTableComponent,
    EmtaButtonComponent,
    EmtaLinkComponent,
    EmtaTooltipComponent,
    EmtaBadgeComponent,
    EmtaFormFeedbackComponent,
    EmtaFormSectionComponent,
    TabsComponent,
    SortPipe,
    TranslateModule
  ],
  declarations: [
    EmtaTextInputComponent,
    EmtaInputComponent,
    EmtaFormRowComponent,
    EmtaNumberInputComponent,
    EmtaSelectComponent,
    EmtaDatepickerComponent,
    EmtaPaginationComponent,
    EmtaThComponent,
    EmtaTableComponent,
    EmtaButtonComponent,
    EmtaLinkComponent,
    EmtaTooltipComponent,
    EmtaBadgeComponent,
    EmtaFormFeedbackComponent,
    EmtaFormSectionComponent,
    TabsComponent,
    Tooltip,
    SortPipe,
  ],
  entryComponents: [Tooltip],
  providers: [],
})
export class UiModule {
}
