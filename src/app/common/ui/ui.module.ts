import {EmtaSelectComponent} from "./emta-select.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmtaTextInputComponent } from './emta-textinput.component';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [
    EmtaTextInputComponent,
    EmtaSelectComponent,
    TranslateModule
  ],
  declarations: [
    EmtaTextInputComponent,
    EmtaSelectComponent
  ],
  providers: [],
})
export class UiModule { }
