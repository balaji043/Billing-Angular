import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { ConfirmPopupBoxComponent } from 'src/app/core/confirm-popup-box/confirm-popup-box.component';
import { BillingService } from 'src/app/service/billing.service';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer.model';
import { UtilityService } from 'src/app/service/utility.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { BillType } from 'src/app/utils/billing-constants';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bill-registration',
  templateUrl: './bill-registration.component.html',
  styleUrls: ['./bill-registration.component.css'],
  providers: [DatePipe]
})
export class BillRegistrationComponent implements OnInit {

  /* #region  variable declaration */
  selectedCustomer: Customer;
  totalAmount: number;
  isCheckAll: boolean;
  isFuzzyLoading: boolean;
  isCustomerSelected: boolean;
  checkBoxMatIcon: string;
  billForm = this.fb.group({
    invoiceName: [],
    creationDate: [],
    user: [null, Validators.required],
    customer: [null, Validators.required],
    products: this.fb.array([])
  });
  customerList: Customer[];
  customerName: string;
  /* #endregion */

  /* #region  constructor */
  constructor(
    public dialog: MatDialog,
    private billingService: BillingService,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private uService: UtilityService,
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private sharedService: SharedService
  ) {
    this.billForm.get('user').setValue(this.tokenStorageService.getUser().user);
    this.totalAmount = 0;
    this.isCheckAll = false;
    this.checkBoxMatIcon = 'check_box_outline_blank';
    this.onClickOfAddProductButton();
    this.isCustomerSelected = false;
    this.customerName = '';
  }
  /* #endregion */

  ngOnInit() {
    this.initializeForCustomerFuzzySearch();
  }

  /* #region  on click action methods */

  public onClickOfAddProductButton() {
    if (this.products) {
      this.products.push(this.fb.group({
        checkBox: [],
        description: [null, Validators.required],
        hsnCode: [null, Validators.required],
        quantity: [null, Validators.required],
        rate: [null, Validators.required],
        taxPercentage: [null, Validators.required],
        perValue: [null, Validators.required],
        discount: [null]
      }));
    }
  }

  public onClickOfOverallDeleteButton() {
    const dialogRef = this.dialog.open(ConfirmPopupBoxComponent, {
      width: 'max-content',
      data: { title: 'Confirm Delete', content: 'Do you want to delete the selected ' + this.getSelectedCount + ' product(s).' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.products.controls = this.products.controls.filter(
          product => !product.get('checkBox').value
        );
        this.onClickOfIndividualSelectButton();
      }
    });
  }

  public onClickOfOverAllSelectButton() {
    let isAnySelected = false;
    this.products.controls.forEach(product => {
      if (product.get('checkBox').value) {
        isAnySelected = true;
        return;
      }
    });
    this.products.controls.forEach(product => product.get('checkBox').setValue(!isAnySelected));
    this.isCheckAll = !this.isCheckAll && !isAnySelected;
    this.updateCheckBoxMatIcon();
  }

  public onSubmit(): void {
    const isValid = this.billForm.valid;
    if (isValid) {
      console.log('valid products');
      const bill = this.billForm.value;
      bill.billType = this.uService.isNullOrUndefined(this.selectedCustomer.gstIn) ? BillType.NON_GST : BillType.GST;
      bill.products.forEach(product => {
        delete product.checkbox;
      });
      bill.customer = this.selectedCustomer;
      bill.creationDate = this.uService.transformDate(new Date());
      this.billingService.saveBill(bill)
        .subscribe(
          result => {
            this.router.navigateByUrl('view-bill');
            this.sharedService.openMatSnackBar('Bill Saved Successfully');
          }, error => {
            this.sharedService.openMatSnackBar(error);
          });
    } else {
      console.log('invalid products');
    }
  }

  /* #endregion */

  /* #region  emmited event functions */
  public onClickOfIndividualSelectButton() {
    this.isCheckAll = this.getTotalCount !== 0 && this.getTotalCount === this.getSelectedCount;
    this.updateCheckBoxMatIcon();
  }

  public onSelectConfirmOfCustomer() {
    if (this.billForm
      .get('customer').valid) {
      this.isCustomerSelected = true;
      this.selectedCustomer = this.billForm.get('customer').value;
    } else {
      this.billForm.get('customer').markAsTouched();
    }
  }
  /* #endregion */

  /* #region  get counts methods */

  get getTotalCount(): number { return this.products.length; }

  get getSelectedCount(): number {
    return this.products.controls.filter(
      product => product.get('checkBox').value
    ).length;
  }

  get products(): FormArray {
    return this.billForm.get('products') as FormArray;
  }

  /* #endregion */

  /* #region enable and disable buttons */

  public isAddButtonDisable(): boolean { return this.getTotalCount >= 20; }

  public isDeleteButtonDisable(): boolean { return this.getSelectedCount === 0; }

  public isSubmitAndSelectAllButtonDisable(): boolean { return this.getTotalCount === 0; }

  /* #endregion */

  /* #region get the tool tip text */

  public getDeleteProductButtonTooltip(): string { return 'Add Product'; }

  public getDeleteSelectedProductButtonTooltip(): string { return 'Delete Selected Product(s)'; }

  /* #endregion */

  /* #region  private methods */

  private updateCheckBoxMatIcon(): void {
    if (this.isCheckAll) {
      this.checkBoxMatIcon = 'check_box';
    } else {
      this.checkBoxMatIcon = 'check_box_outline_blank';
    }
  }
  /* #endregion */


  public initializeForCustomerFuzzySearch(): void {
    this.billForm
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
    return '';
  }

}
