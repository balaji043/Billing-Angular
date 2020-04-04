import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {


  constructor() { }

  public isNullOrUndefined(obj: any): boolean {
    return typeof obj === 'undefined' || obj === null;
  }
  public isNullOrUndefinedOrEmpty(value: any): boolean {
    return this.isNullOrUndefined(value) || value.length === 0;
  }

  public cloneObject(value: any): any {
    return Object.assign({}, value);
  }

}
