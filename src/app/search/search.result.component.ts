import {PaginationInstance} from 'ng2-pagination';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from '../common/ui/title';

@Component({
  selector: 'search-result',
  providers: [Title],
  templateUrl: './search.result.component.html'
})
export class SearchResultComponent implements OnInit {
  @Input() items: Array<Object>;

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
  };

  constructor(
    public appState: AppState,
    public title: Title,
  ) {}

  public ngOnInit() {
    console.log('search result');
  }
}