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

  private makeSandwich() {
    return {
      date: new Date(new Date().getTime() * Math.random()),
      duration: Math.floor(Math.random() * 100),
      location: ['Tallinn', 'Crapstone', 'Gotham', 'Coruscant', 'Tron city', 'Babylon']
        [Math.floor(Math.random() * 6)],
      login: ['ID-kaart', 'Mobiil-Id', 'Smart-Id', 'Pangalink', 'Honesty'][Math.floor(Math.random() * 5)]
    };
  }
}
