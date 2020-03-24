import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bill } from '../model/bill.model';
import { UtilityServiceService } from './utility-service.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private utilityServiceService: UtilityServiceService) { }

  saveBill(bill: Bill): Observable<Bill> {
    const url = 'http://localhost:8080/bam/bill/save';
    if (this.utilityServiceService.isNullOrUndefinedOrEmpty(bill.id)) {
      return this.http.post<Bill>(url, bill);
    } else {
      return this.http.put<Bill>(url, bill);
    }
  }
}
