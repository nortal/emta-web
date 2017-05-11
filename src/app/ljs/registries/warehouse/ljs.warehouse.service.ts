import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WarehouseService {

  private headers = new Headers({Accept: 'application/vnd.api+json'});
  private data: Object[];

  constructor(private http: Http) {
  }

  public findWarehouses(): Promise<Object[]> {
    this.data = [];
    let i = 32;
    while (i--) {
      this.data.push(this.makeSandwich());
    }

    return Promise.resolve(this.data);
    /*
     return this.http
     .get("api/warehouse/find", {})
     .map(response => {
     console.log(response);
     response.json() as Object[];
     });
     */
  }

  public loadWarehouse(id: Number): Promise<any> {
    return Promise.resolve(this.makeSandwich());
    /*
     return this.http
     .get("api/warehouse/find", {})
     .map(response => {
     console.log(response);
     response.json() as Object[];
     });
     */
  }

  public saveWarehouse(data: any): Promise<any> {
    return Promise.reject('errorcode 55');
  }

  private makeSandwich() {
    return {
      id: Math.floor(Math.random() * 20000),
      permitNumber: 'AD02933',
      permitType: ['Aktsiisilao luba', 'Maksulao luba'][Math.floor(Math.random() * 2)],
      personName: ['Vopak AS', 'Prike'][Math.floor(Math.random() * 2)] as string,
      personRegNr: ['10182828', '12340097'][Math.floor(Math.random() * 2)],
      validFrom: new Date(new Date().getTime() * Math.random()),
      validUntil: new Date(new Date().getTime() * Math.random()),
      storableGoods: ['Kütus', 'Kütus, Muu', 'Muu'][Math.floor(Math.random() * 3)],
      status: ['VALID', 'INVALID'][Math.floor(Math.random() * 2)]
    };
  }
}
