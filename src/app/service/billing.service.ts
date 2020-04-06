import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bill } from '../model/bill.model';
import { UtilityService } from './utility.service';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { ApiService } from './api.service';
import { MSName } from '../utils/billing-constants';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(
    private apiService: ApiService,
    private environmentService: EnvironmentService
  ) { }

  public saveBill(bill: Bill): Observable<Bill> {
    return this.apiService.post(this.getUrl(APIName.SAVE), bill);
  }

  public updateBill(bill: Bill): Observable<Bill> {
    return this.apiService.put(this.getUrl(APIName.UPDATE), bill);
  }

  private getUrl(apiName: string): string {
    return this.environmentService.getUrl(MSName.BILL_MS, apiName);
  }

}

export class APIName {
  public static SAVE = 'Save';
  public static UPDATE = 'Update';
  public static SEARCH = 'Search';
  public static DELETE = 'Delete';
}
