import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Injectable} from '@angular/core';
import {operationalInterestObjects} from './mock-operational-interests';

@Injectable()
export class OperationalInterestService {
  search(): Array<Object> {
    return operationalInterestObjects;
  }
}
