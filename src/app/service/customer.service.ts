import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';
import { MSName, CustomerAPIName } from '../utils/billing-constants';
import { CustomerRequest } from '../model/customer-request';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiService: ApiService, private environmentService: EnvironmentService) { }


  public getCustomers(customerSearchRequest: CustomerRequest): Observable<Customer[]> {
    return this.apiService.post(this.getUrl(CustomerAPIName.SEARCH), customerSearchRequest);
  }

  public getCustomerFuzzy(customerName: string): Observable<Customer[]> {
    return this.apiService.post(this.getUrl(CustomerAPIName.FUZZY), customerName);
  }

  public saveCustomer(customer: Customer): Observable<Customer> {
    return this.apiService.post(this.getUrl(CustomerAPIName.SAVE), customer);
  }

  private getUrl(apiName: string): string {
    return this.environmentService.getUrl(MSName.CUSTOMER_MS, apiName);
  }

}
