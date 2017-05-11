import { Subject } from 'rxjs/Subject';
import { SortInstance, SortType } from '../../../common/ui/list/sort-instance';
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Router, NavigationEnd
} from '@angular/router';
import { WarehouseService } from './ljs.warehouse.service';
import { AppState } from '../../../app.service';

@Component({
  selector: 'ljs-warehouse',
  templateUrl: './ljs.warehouse.component.html'
})
export class LjsWarehouseComponent implements OnInit, OnDestroy {
  public sort = new SortInstance('id', SortType.DESC);
  public pager = {
    id: 'some-table-id',
    itemsPerPage: 25,
    currentPage: 1
  };
  private data: any[];
  private routeListener: any;

  constructor(private warehouseService: WarehouseService, private router: Router, private appState: AppState) {
    console.log('constructor');
    this.routeListener = this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.appState.set('pager', this.pager);
      }
    });
  }

  public ngOnInit() {
    console.log('init');

    this.warehouseService.findWarehouses().then((data) => {
      this.data = data;
      let savedPager = this.appState.get('pager');
      if (savedPager && savedPager.currentPage) {
        this.pager = savedPager;
      }
    });
  }

  public submitState(value: string) {
    console.log('submitState', value);
  }

  public selectRow(id: number) {
    console.log(id);
    this.router.navigate(['ljs/warehouse', id]);
  }

  public ngOnDestroy() {
    console.log('ngOnDestroy');
    this.routeListener.unsubscribe();
  }

}
