import { EmtaSelectInnerComponent } from "./emta-select-inner.component";
import { EmtaMultiSelectComponent } from "./emta-multi-select.component";
import { EmtaDatepickerComponent } from './emta-datepicker.component';
import { EmtaSelectComponent } from './emta-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
import { EmtaBadgeComponent } from './emta-badge.component';
import { EmtaFormRowComponent, EmtaFormSectionComponent, EmtaFormFeedbackComponent } from './form';
import { TabsComponent } from './layout/tabs.component';
import { AccordionBlockComponent } from './layout/accordion.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    Ng2PaginationModule,
    DatepickerModule.forRoot(),
    PopoverModule.forRoot(),
    MyDatePickerModule
  ],
  exports: [
    EmtaInputComponent,
    EmtaFormRowComponent,
    EmtaSelectComponent,
    EmtaMultiSelectComponent,
    EmtaDatepickerComponent,
    EmtaPaginationComponent,
    EmtaThComponent,
    EmtaTableComponent,
    EmtaButtonComponent,
    EmtaLinkComponent,
    EmtaBadgeComponent,
    EmtaFormFeedbackComponent,
    EmtaFormSectionComponent,
    TabsComponent,
    AccordionBlockComponent,
    SortPipe,
    TranslateModule
  ],
  declarations: [
    EmtaInputComponent,
    EmtaFormRowComponent,
    EmtaSelectComponent,
    EmtaMultiSelectComponent,
    EmtaSelectInnerComponent,
    EmtaDatepickerComponent,
    EmtaPaginationComponent,
    EmtaThComponent,
    EmtaTableComponent,
    EmtaButtonComponent,
    EmtaLinkComponent,
    EmtaBadgeComponent,
    EmtaFormFeedbackComponent,
    EmtaFormSectionComponent,
    TabsComponent,
    AccordionBlockComponent,
    SortPipe,
  ],
  entryComponents: [],
  providers: [],
})
export class UiModule {
}
