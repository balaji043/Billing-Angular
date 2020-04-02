import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bill } from '../model/bill.model';
import { UtilityService } from './utility.service';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(
    private apiService: ApiService,
    private environmentService: EnvironmentService
  ) { }

  saveBill(bill: Bill): Observable<Bill> {
    return this.apiService.post(this.environmentService.getUrl('Bill-MS', 'Save'), bill);
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.apiService.put(this.environmentService.getUrl('Bill-MS', 'Update'), bill);
  }
}
