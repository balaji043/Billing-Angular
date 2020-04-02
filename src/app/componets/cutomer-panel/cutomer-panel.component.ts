import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomerTableConfig } from 'src/app/config/generic-table-config/customer-table-config';
import { CustomerRegistrationComponent } from '../customer-registration/customer-registration.component';
import { GridConfig } from 'src/app/model/grid-config';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-cutomer-panel',
  templateUrl: './cutomer-panel.component.html',
  styleUrls: ['./cutomer-panel.component.css']
})
export class CutomerPanelComponent implements OnInit {

  customerGridConfig: GridConfig;
  customersList: Customer[];

  constructor(public dialog: MatDialog, ) {
    this.customerGridConfig = CustomerTableConfig();
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
    const customer = new Customer();
    customer.name = 'not not';
    return [
      new Customer(),
      new Customer(),
      new Customer(),
      new Customer(),
      new Customer(),
      new Customer(),
      new Customer(),
      new Customer(),
      customer
    ];
  }

}
