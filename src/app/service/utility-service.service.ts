import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor() { }

  public isNullOrUndefinedOrEmpty(value: any): boolean {
    return typeof value === 'undefined' || value === null || value.length === 0;
  }
}
