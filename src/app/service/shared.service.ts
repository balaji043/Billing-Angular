import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public getCustomersList(): Customer[] {
    const cutomers = [];
    const customer = new Customer(1);
    cutomers.push(customer);
    customer.name = 'not not';
    for (let i = 1; i < 4; i++) {
      cutomers.push(new Customer(i));
    }
    return cutomers;
  }
}
