import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-uig-11',
  templateUrl: './uig.11.form-validations.component.html'
})
export class UigFormValidationsComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  public brick: any = {};

  constructor() {
  }


  public ngOnInit() {
    this.form.control.setControl('ttest4', new FormControl('', Validators.required));
  }

  public submitForm () {
    console.log(this.form);
  }
}

