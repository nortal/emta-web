import { Injectable } from '@angular/core';
import { operationalInterestObjects } from './mock-operational-interests';

@Injectable()
export class OperationalInterestService {
  public search(): Object[] {
    return operationalInterestObjects;
  }
}
