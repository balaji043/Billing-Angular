import { Component, OnInit } from '@angular/core';
import { GridConfig } from 'src/app/model/grid-config';
import { BillingConstants } from 'src/app/utils/billing-constants';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-cutomer-panel',
  templateUrl: './cutomer-panel.component.html',
  styleUrls: ['./cutomer-panel.component.css']
})
export class CutomerPanelComponent implements OnInit {

  gridConfig: GridConfig;
  customersList: Customer[];

  constructor() {
    this.gridConfig = BillingConstants.CUSTOMER_TABLE_CONFIG;
    this.customersList = this.getCustomersList();
  }

  ngOnInit() {
  }

  private getCustomersList(): Customer[] {
    return [
      this.getCustomer(),
      this.getCustomer(),
      this.getCustomer(),
      this.getCustomer(),
      this.getCustomer(),
      this.getCustomer(),
      this.getCustomer(),
      this.getCustomer()
    ];
  }
  private getCustomer(): Customer {
    return new Customer();
  }

}
