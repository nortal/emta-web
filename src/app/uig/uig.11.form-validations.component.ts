import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-uig-11',
  templateUrl: './uig.11.form-validations.component.html'
})
export class UigFormValidationsComponent implements OnInit {
  public form: FormGroup;
  public brick: any = {};
  public pallet: any = {};

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'ttest1':[this.brick.test1],
      'ttest2':['', Validators.required],
      'ttest3':['', Validators.compose([Validators.required, Validators.pattern('[a]*')])],
      'ttest4':[''],
      'ttest5':['']
    });
  }


  public ngOnInit() {
  }

  public submitForm () {
    console.log(this.form);
    this.brick = this.form.value;
  }

  public markAsDirty(group: FormGroup | FormArray) {
    group.markAsDirty()
    for (let i in group.controls) {
      if (group.controls[i] instanceof FormControl) {
        group.controls[i].markAsDirty();
      } else {
        this.markAsDirty(group.controls[i]);
      }
    }
  }
}

