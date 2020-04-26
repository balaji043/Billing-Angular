import { Component, OnInit, ViewChild } from '@angular/core';
import { GridConfig } from 'src/app/model/generic-grid.config';
import { BillTableConfig } from 'src/app/config/generic-table-config/bill-table-config';
import { MatTableDataSource } from '@angular/material';
import { BillingService } from 'src/app/service/billing.service';
import { GenericGridComponent } from 'src/app/core/mat-generic-grid/mat-generic-grid.component';
import { Customer } from 'src/app/model/customer.model';
import { FormBuilder } from '@angular/forms';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { CustomerService } from 'src/app/service/customer.service';
import { SearchBillRequest } from 'src/app/model/search-bill-request';
import { UtilityService } from 'src/app/service/utility.service';
@Component({
  selector: 'app-bill-panel',
  templateUrl: './bill-panel.component.html',
  styleUrls: ['./bill-panel.component.css']
})
export class BillPanelComponent implements OnInit {

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

  public onClickOfEditIconButton(element): void {
    console.log(element);
  }

}
