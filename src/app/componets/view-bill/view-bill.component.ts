import { Component, OnInit, ViewChild } from '@angular/core';
import { EnvironmentService } from 'src/app/service/environment.service';
import { MSName, CustomerAPIName } from 'src/app/utils/billing-constants';
import { InputDropDownConfig } from 'src/app/model/input-dropdown.model';
import { GridConfig } from 'src/app/model/generic-grid.config';
import { BillTableConfig } from 'src/app/config/generic-table-config/bill-table-config';
import { MatTableDataSource } from '@angular/material';
import { BillingService } from 'src/app/service/billing.service';
import { ApiResponse } from 'src/app/model/api-response';
import { GenericGridComponent } from 'src/app/core/generic-grid/generic-grid.component';
@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {

  @ViewChild(GenericGridComponent, { static: true }) genericGrid: GenericGridComponent;

  billTableConfig: GridConfig;
  billList: MatTableDataSource<any>;

  constructor(
    private billService: BillingService,
    private environmentService: EnvironmentService
  ) {
    this.billTableConfig = BillTableConfig();
    this.makeSearchBillsAPICall();
  }

  ngOnInit() {
    this.billList = new MatTableDataSource();
    this.billList.paginator = this.genericGrid.paginator;
  }


  public makeSearchBillsAPICall(): void {
    this.billService.searchBills({ isAllBillRequest: true }).subscribe(result => {
      this.billList.data = result.data;
    });
  }

}
