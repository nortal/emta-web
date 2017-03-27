import {CountryService} from "./country.service";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
  ],
  declarations: [
  ],
  providers: [
    CountryService
  ],
})
export class CountryModule { }
