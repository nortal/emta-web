import { Component, OnInit } from '@angular/core';
import { SortInstance , SortType } from '../common/ui/list/sort-instance';

@Component({
  selector: 'app-uig-09',
  templateUrl: './uig.09.tables.component.html'
})
export class UigTablesComponent implements OnInit {
  private loremipsums: any[];
  public sort = new SortInstance('i1', SortType.DESC);

  public ngOnInit() {
    this.loremipsums = [
      {i1: 'lorem ipsum1', i2: (Math.random() * 100000), i3: new Date(), i4: Math.random() * 1000},
      {i1: 'lorem ipsum2', i2: (Math.random() * 100000), i3: new Date(), i4: Math.random() * 1000},
      {i1: 'lorem ipsum3', i2: (Math.random() * 100000), i3: new Date(), i4: Math.random() * 1000},
    ];

  }

}


