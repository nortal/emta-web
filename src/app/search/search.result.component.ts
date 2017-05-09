import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from '../common/ui/title';
import { SortInstance, SortType } from '../common/ui/list/sort-instance';

@Component({
  selector: 'search-result',
  providers: [Title],
  templateUrl: './search.result.component.html'
})
export class SearchResultComponent implements OnInit {
  @Input() public items: Object[];

  public pager = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
  };

  public sort = new SortInstance('country', SortType.DESC);

  constructor(public appState: AppState, public title: Title) {
  }

  public ngOnInit() {
    console.log('search result');
  }
}
