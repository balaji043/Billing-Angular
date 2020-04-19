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
import { Customer } from 'src/app/model/customer.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { CustomerService } from 'src/app/service/customer.service';
import { SearchBillRequest } from 'src/app/model/search-bill-request';
import { DatePipe } from '@angular/common';
import { UtilityService } from 'src/app/service/utility.service';
@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {

  @ViewChild(GenericGridComponent, { static: true }) genericGrid: GenericGridComponent;

  billTableConfig: GridConfig;
  billList: MatTableDataSource<any>;
  isFuzzyLoading: boolean;
  customerList: Customer[];
  advanceSearchForm = this.fb.group({
    customer: [],
    startDate: [],
    endDate: []
  });

  constructor(
    private fb: FormBuilder,
    private billService: BillingService,
    private customerService: CustomerService,
    private uService: UtilityService
  ) {
    this.billTableConfig = BillTableConfig();
    this.makeSearchBillsAPICall();
  }

  ngOnInit() {
    this.billList = new MatTableDataSource();
    this.billList.paginator = this.genericGrid.paginator;
    this.initializeForCustomerFuzzySearch();
  }


  public makeSearchBillsAPICall(): void {
    let searchRequest: SearchBillRequest;
    if (this.advanceSearchForm.touched && this.advanceSearchForm.valid) {
      searchRequest = this.advanceSearchForm.value as SearchBillRequest;
      searchRequest.startDate = this.uService.transformDate(searchRequest.startDate);
      searchRequest.endDate = this.uService.transformDate(searchRequest.endDate);
      searchRequest.isAllBillRequest = false;
    } else {
      searchRequest = {
        isAllBillRequest: true,
        startDate: null,
        endDate: null
      };
    }
    this.billService.searchBills(searchRequest).subscribe(result => {
      this.billList.data = result.data;
    });
  }

  public initializeForCustomerFuzzySearch(): void {
    this.advanceSearchForm
      .get('customer')
      .valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isFuzzyLoading = true),
        switchMap(value => this.customerService.getCustomerFuzzy('%' + value + '%')
          .pipe(
            finalize(() => this.isFuzzyLoading = false),
          )
        )
      )
      .subscribe(customerList => {
        this.customerList = customerList;
      });
  }
  public displayFn(user: any): string {
    if (user) {
      return user.name;
    }
  }

}
