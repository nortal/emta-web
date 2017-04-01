import {EmtaDatepickerComponent} from './emta-datepicker.component';
import {EmtaSelectComponent} from './emta-select.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EmtaTextInputComponent} from './emta-textinput.component';
import {EmtaNumberInputComponent} from './emta-numberinput.component';
import {EmtaInputComponent} from './emta-input.component';
import {TranslateModule} from 'ng2-translate';
import {DatepickerModule} from 'ng2-bootstrap/datepicker';
import {PopoverModule} from 'ng2-bootstrap/popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    DatepickerModule.forRoot(),
    PopoverModule.forRoot()
  ],
  exports: [
    EmtaTextInputComponent,
    EmtaInputComponent,
    EmtaNumberInputComponent,
    EmtaSelectComponent,
    EmtaDatepickerComponent,
    TranslateModule
  ],
  declarations: [
    EmtaTextInputComponent,
    EmtaInputComponent,
    EmtaNumberInputComponent,
    EmtaSelectComponent,
    EmtaDatepickerComponent
  ],
  providers: [],
})
export class UiModule {
}
