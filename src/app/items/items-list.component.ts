import { Component, OnInit, Input} from '@angular/core';
import { SortInstance, SortType } from '../common/ui/list/sort-instance';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { MessageCtxService } from "../common/ui/messages/message.ctx.service";

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html'
})
export class ItemsListComponent implements OnInit {
  @Input() public items: Object[];
  public ct = new Headers({'Accept': 'application/vnd.api+json'});

  constructor(private http: Http, public messageCtx: MessageCtxService) {

  }

  public ngOnInit() {
    return this.http.get('api/items', {'headers': this.ct})
      .map((r) => r.json() as Object[])
      .toPromise().then((i) => this.items = i);
  }

  public addInvalidItem() {
    this.http.post('api/items', {
      "id": 12,
      "test": "32342344",
      "identifiers": [
        {
          "value": "parampam",
          "system": null
        }
      ]
    }, {'headers': this.ct}).toPromise();
  }

  public addSuccessItem() {
    this.messageCtx.addSuccess('test success');
  }

  public addWarningItem() {
    this.messageCtx.addWarning('test warning');
  }
}
