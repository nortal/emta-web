import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-uig-11',
  templateUrl: './uig.11.form-validations.component.html'
})
export class UigFormValidationsComponent {
  public testForm : FormGroup;
  public control:any;
  public brick: any = {
  };

  constructor() {
    this.control = new FormControl('', Validators.required);
  }
}

