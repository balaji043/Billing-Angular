import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private snackBar: MatSnackBar) { }

  public getCustomersList(): Customer[] {
    const cutomers = [];
    const customer = new Customer();
    cutomers.push(customer);
    customer.name = 'not not';
    for (let i = 1; i < 4; i++) {
      cutomers.push(new Customer());
    }
    return cutomers;
  }

  public openMatSnackBar(msg: any): void {
    this.snackBar.open(msg, 'action', {
      duration: 2000,
    });
  }
}
