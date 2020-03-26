import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public isNullOrUndefinedOrEmpty(value: any): boolean {
    return typeof value === 'undefined' || value === null || value.length === 0;
  }

  public cloneObject(value: any): any {
    return Object.assign({}, value);
  }
}
