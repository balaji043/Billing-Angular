import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Bill } from '../../model/bill.model';

import { SingleProductComponent } from 'src/app/componets/single-product/single-product.component';
import { MatDialog } from '@angular/material';
import { ConfirmPopupBoxComponent } from 'src/app/core/confirm-popup-box/confirm-popup-box.component';
import { BillingService } from 'src/app/service/billing.service';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

  /* #region angular directives */
  @ViewChildren(SingleProductComponent) productComponentList: QueryList<SingleProductComponent>;
  /* #endregion */

  /* #region  variable declaration */
  customerName: string;
  totalAmount: number;
  isCheckAll: boolean;
  checkBoxMatIcon: string;
  billForm = this.fb.group({
    id: [],
    invoiceName: [],
    creationDate: [],
    userId: [],
    customerId: [],
    billType: [],
    products: this.fb.array([])
  });
  /* #endregion */

  /* #region  constructor */
  constructor(public dialog: MatDialog, private billingService: BillingService, private fb: FormBuilder) {
    this.customerName = 'Tony Stark';
    this.totalAmount = 0;
    this.isCheckAll = false;
    this.checkBoxMatIcon = 'check_box_outline_blank';
    this.onClickOfAddProductButton();
  }
  /* #endregion */

  ngOnInit() { }

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
    this.billForm.get('invoiceName').setValue('invoice1');
    if (isValid) {
      console.log('valid products');
      const bill = this.billForm.value as Bill;
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
