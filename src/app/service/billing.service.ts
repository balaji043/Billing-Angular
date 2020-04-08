import { Injectable } from '@angular/core';
import { Bill } from '../model/bill.model';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { ApiService } from './api.service';
import { MSName, BillAPIName } from '../utils/billing-constants';
import { SearchBillRequest } from '../model/search-bill-request';
import { ApiResponse } from '../model/api-response';

@Injectable({
  providedIn: 'root'
})
export class BillingService {


  constructor(
    private apiService: ApiService,
    private environmentService: EnvironmentService
  ) { }

  public saveBill(bill: Bill): Observable<Bill> {
    return this.apiService.post(this.getUrl(BillAPIName.SAVE), bill);
  }

  public updateBill(bill: Bill): Observable<Bill> {
    return this.apiService.put(this.getUrl(BillAPIName.UPDATE), bill);
  }

  public searchBills(request: SearchBillRequest): Observable<ApiResponse> {
    return this.apiService.post(this.getUrl(BillAPIName.SEARCH), request);
  }


  private getUrl(apiName: string): string {
    return this.environmentService.getUrl(MSName.BILL_MS, apiName);
  }


}


