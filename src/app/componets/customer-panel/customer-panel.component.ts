import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomerTableConfig } from 'src/app/config/generic-table-config/customer-table-config';
import { CustomerRegistrationComponent } from '../customer-registration/customer-registration.component';
import { GridConfig } from 'src/app/model/grid-config';
import { Customer } from 'src/app/model/customer.model';
import { CustomerRequest } from 'src/app/model/customer-request';
import { CustomerService } from 'src/app/service/customer.service';
import { CustomerType } from 'src/app/utils/billing-constants';
@Component({
  selector: 'app-cutomer-panel',
  templateUrl: './customer-panel.component.html',
  styleUrls: ['./customer-panel.component.css']
})
export class CustomerPanelComponent implements OnInit {


  customerGridConfig: GridConfig;
  customersList: Customer[];
  customerSearchRequest: CustomerRequest;
  public CustomerType = CustomerType;
  constructor(
    public dialog: MatDialog,
    private customerService: CustomerService) {
    this.customerGridConfig = CustomerTableConfig();
    this.customerSearchRequest = new CustomerRequest();
    this.makeSearchCustomerCall();
  }

  ngOnInit() { }

  public openCustomerRegistrationDialog(): void {
    const dialogRef = this.dialog.open(CustomerRegistrationComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.makeSearchCustomerCall();
      }
    });
  }

  public makeSearchCustomerCall(): void {
    this.customerService.getCustomers(this.customerSearchRequest).subscribe(result => {
      this.customersList = result;
    }, error => {
      console.error(error);
    });
  }
}
