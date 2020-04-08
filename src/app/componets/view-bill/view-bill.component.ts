import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from 'src/app/service/environment.service';
import { MSName, CustomerAPIName } from 'src/app/utils/billing-constants';
import { InputDropDownConfig } from 'src/app/model/input-dropdown.model';
import { GridConfig } from 'src/app/model/generic-grid.config';
import { BillTableConfig } from 'src/app/config/generic-table-config/bill-table-config';
import { MatTableDataSource } from '@angular/material';
import { BillingService } from 'src/app/service/billing.service';
import { ApiResponse } from 'src/app/model/api-response';
@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {

  billTableConfig: GridConfig;
  billList: MatTableDataSource<any>;

  constructor(
    private billService: BillingService,
    private environmentService: EnvironmentService
  ) {
    this.billTableConfig = BillTableConfig();
  }

  ngOnInit() {

  }


  makeSearchBillsAPICall() {
    this.billService.searchBills({ isAllBillRequest: true }).subscribe(result => {
      this.billList = new MatTableDataSource(result.data);
    });
  }

}
