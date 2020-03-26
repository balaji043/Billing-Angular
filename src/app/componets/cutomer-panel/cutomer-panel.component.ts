import { Component, OnInit } from '@angular/core';
import { GridConfig } from 'src/app/model/grid-config';
import { BillingConstants } from 'src/app/utils/billing-constants';
import { Customer } from 'src/app/model/customer.model';
import { MatDialog } from '@angular/material';
import { CustomerRegistrationComponent } from '../customer-registration/customer-registration.component';
import { ConfirmPopupBoxComponent } from 'src/app/core/confirm-popup-box/confirm-popup-box.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cutomer-panel',
  templateUrl: './cutomer-panel.component.html',
  styleUrls: ['./cutomer-panel.component.css']
})
export class CutomerPanelComponent implements OnInit {

  customerGridConfig: GridConfig;
  customersList: Customer[];

  constructor(public dialog: MatDialog, ) {
    this.customerGridConfig = BillingConstants.CUSTOMER_TABLE_CONFIG();
    this.customersList = this.getCustomersList();
  }

  ngOnInit() {
  }

  openCustomerRegistrationDialog(): void {
    const dialogRef = this.dialog.open(CustomerRegistrationComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('saved');
      } else {
        console.log('not saved');
      }
    });
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
