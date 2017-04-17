import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uig-08-2',
  templateUrl: './uig.08.formtypes.component.html'
})
export class UigFormTypesComponent {
  public steps = [
    {level:'complete', name:'Samm 1'},
    {level:'warning',  name:'Samm 2'},
    {level:'active',   name:'Samm 3'},
    {level:'error',    name:'Samm 4'},
    {level:'locked',   name:'Samm 5'}];
}


