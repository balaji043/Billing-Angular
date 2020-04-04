import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill.model';

import { MatDialog } from '@angular/material';
import { ConfirmPopupBoxComponent } from 'src/app/core/confirm-popup-box/confirm-popup-box.component';
import { BillingService } from 'src/app/service/billing.service';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer.model';
import { SharedService } from 'src/app/service/shared.service';
import { UtilityService } from 'src/app/service/utility.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { BillType } from 'src/app/model/billType.model';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

  /* #region  variable declaration */
  selectedCustomer: Customer;
  totalAmount: number;
  isCheckAll: boolean;
  isCustomerSelected: boolean;
  checkBoxMatIcon: string;
  billForm = this.fb.group({
    invoiceName: [],
    creationDate: [],
    userId: [null, Validators.required],
    customerId: [],
    products: this.fb.array([])
  });
  customerList: Customer[];
  /* #endregion */

  /* #region  constructor */
  constructor(
    public dialog: MatDialog,
    private billingService: BillingService,
    private fb: FormBuilder,
    private sharedService: SharedService,
    private uService: UtilityService,
    private tokenStorageService: TokenStorageService
  ) {
    this.billForm.get('userId').setValue(this.tokenStorageService.getUser().id);
    this.totalAmount = 0;
    this.isCheckAll = false;
    this.checkBoxMatIcon = 'check_box_outline_blank';
    this.onClickOfAddProductButton();
    this.customerList = this.sharedService.getCustomersList();
    this.isCustomerSelected = false;
  }
  /* #endregion */

  ngOnInit() { }

  public onCustomerTextChange(value: string): void {
    if (this.uService.isNullOrUndefinedOrEmpty(value) || value.length < 3) {
      return;
    }
    this.customerList = this.sharedService.getCustomersList();
  }

  public getCustomerNameById(id: number): string {
    this.selectedCustomer = this.customerList.find(c => id === c.id);
    return this.uService.isNullOrUndefined(this.selectedCustomer)
      || this.uService.isNullOrUndefinedOrEmpty(this.selectedCustomer.name) ?
      ''
      : this.selectedCustomer.name;
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
      bill.creationDate = '2020-04-19';
      this.billingService.saveBill(bill)
        .subscribe(
          result => {
            console.log('saved');
            console.log(result);
          }, error => {
            console.error(error);
          });
    } else {
      console.log('invalid products');
    }
  }

  public onClickOfCustomerSelect(): void {
    if (this.uService.isNullOrUndefined(this.selectedCustomer)) {
      this.billForm.get('customerId').markAsTouched();
    } else {
      this.isCustomerSelected = true;

    }
  }

  /* #endregion */

  /* #region  emmited event functions */
  public onClickOfIndividualSelectButton() {
    this.isCheckAll = this.getTotalCount !== 0 && this.getTotalCount === this.getSelectedCount;
    this.updateCheckBoxMatIcon();
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

}
