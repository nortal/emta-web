import { Component, OnInit } from '@angular/core';
import { SortInstance , SortType } from '../common/ui/list/sort-instance';

@Component({
  selector: 'app-uig-09-cplx',
  templateUrl: './uig.09.complxtables.component.html'
})
export class UigComplexTablesComponent implements OnInit {
  public sort = new SortInstance('date', SortType.DESC);
  public pager = {
    id: 'some-table-id',
    itemsPerPage: 10,
    currentPage: 1
  };

  private data: any[];

  public ngOnInit() {
    this.data = [];
    let i = 32;
    while (i--) {
      this.data.push(this.makeSandwich());
    }
  }

  private makeSandwich() {
    return {
      date: new Date(new Date().getTime() * Math.random()),
      duration: Math.floor(Math.random() * 100),
      location: ['Tallinn', 'Crapstone', 'Gotham', 'Coruscant', 'Tron city', 'Babylon'][Math.floor(Math.random() * 6)],
      login: ['ID-kaart', 'Mobiil-Id', 'Smart-Id', 'Pangalink', 'Honesty'][Math.floor(Math.random() * 5)]
    };
  }

}
