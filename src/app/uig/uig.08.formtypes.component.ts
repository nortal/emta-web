import { Component, OnInit } from '@angular/core';
import { Tab } from '../common/ui/tabs/tab';

@Component({
  selector: 'app-uig-08-2',
  templateUrl: './uig.08.formtypes.component.html'
})
export class UigFormTypesComponent {
  public tabcontent: string = 'tab: Samm 3';
  public tabs: Tab[] = <Tab[]>[
    {name:'Samm 1', icon:'complete'},
    {name:'Samm 2', icon:'warning' },
    {name:'Samm 3', selected: true },
    {name:'Samm 4', icon:'error'},
    {name:'Samm 5', icon:'locked'}
  ];

  public switchTab(tab: Tab) {
    this.tabcontent = 'tab: ' + tab.name;
  }
}


