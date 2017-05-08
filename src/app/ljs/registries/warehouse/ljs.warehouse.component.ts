import { Subject } from 'rxjs/Subject';
import { SortInstance, SortType } from '../../../common/ui/list/sort-instance';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import { WarehouseService } from './ljs.warehouse.service';

@Component({
  selector: 'ljs-warehouse',
  templateUrl: './ljs.warehouse.component.html'
})
export class LjsWarehouseComponent implements OnInit {
  public sort = new SortInstance('date', SortType.DESC);
  public pager = {
    id: 'some-table-id',
    itemsPerPage: 25,
    currentPage: 1
  };
  private data: any[];

  constructor(private warehouseService: WarehouseService, private router: Router) {
  }

  public ngOnInit() {
    this.warehouseService.findWarehouses().then((data) => {
      this.data = data;
    });
  }

  public submitState(value: string) {
    console.log('submitState', value);
    /*    this.resultList = this.operationalInterestService.search()
     .filter((item: any) => {
     return !this.searchParams.objectType
     || item.objectType === (this.searchParams.objectType === 'Isik' ? 'PERSON' : 'CAR');
     });
     */
  }

  public addNew() {
    this.router.navigate(['/detail']);
  }
}
