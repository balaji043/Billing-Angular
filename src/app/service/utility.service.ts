import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private datePipe: DatePipe
  ) { }

  public isNullOrUndefined(obj: any): boolean {
    return typeof obj === 'undefined' || obj === null;
  }
  public isNullOrUndefinedOrEmpty(value: any): boolean {
    return this.isNullOrUndefined(value) || value.length === 0;
  }

  public cloneObject(value: any): any {
    return Object.assign({}, value);
  }

  public transformDate(date: any): string {
    if (this.isNullOrUndefined(date)) {
      return null;
    }
    try {
      return this.datePipe.transform(date, 'dd-MM-yyyy');
    } catch (error) {
      return date;
    }
  }

}
