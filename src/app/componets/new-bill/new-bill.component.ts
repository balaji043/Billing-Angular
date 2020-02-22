import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Product } from '../../model/product.model';
import { Bill } from '../../model/bill.model';
import { ConfirmationPopup } from '../../model/';

import { SingleProductComponent } from 'src/app/core/single-product/single-product.component';
import { MatDialog } from '@angular/material';
import { ConfirmPopupBoxComponent } from 'src/app/core/confirm-popup-box/confirm-popup-box.component';

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
  bill: Bill;
  customerName: string;
  totalAmount: number;
  /* #endregion */

  /* #region  constructor */
  constructor(public dialog: MatDialog) {
    this.bill = new Bill();
    this.bill.products = [];
    this.customerName = 'Tony Stark';
    this.totalAmount = 0;
    this.onClickOfAddProductButton();
  }
  /* #endregion */

  ngOnInit() { }

  /* #region  on click action methods */

  public onClickOfAddProductButton() {
    this.bill.products.push(new Product());
  }

  public onClickOfOverallDeleteButton() {
    const dialogRef = this.dialog.open(ConfirmPopupBoxComponent, {
      width: '300px',
      data: { title: 'Confirm Delete', content: 'Do you want to delete the selected ' + this.getSelectedCount() + ' product(s).' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.bill.products = this.bill.products.filter(
          product => !product.isSelected
        );
      }
    });

  }

  public onClickOfIndividualDeleteButton(productToBeDeleted: Product) {
    this.bill.products = this.bill.products.filter(
      product => product !== productToBeDeleted
    );
  }

  public onSubmit(): void {
    const isValid = this.validateProductList();
    if (isValid) {
      console.log('valid products');
    } else {
      console.log('invalid products');
    }
  }

  /* #endregion */

  /* #region  get counts methods */

  public getTotalCount(): number { return this.bill.products.length; }

  public getSelectedCount(): number {
    return this.bill.products.filter(
      product => product.isSelected
    ).length;
  }

  /* #endregion */

  /* #region enable and disable buttons */

  public isAddButtonDisable(): boolean { return this.getTotalCount() >= 20; }

  public isDeleteButtonDisable(): boolean { return this.getSelectedCount() === 0; }

  /* #endregion */

  /* #region get the tool tip text */

  public getDeleteProductButtonTooltip(): string { return 'Add Product'; }

  public getDeleteSelectedProductButtonTooltip(): string { return 'Delete Selected Product(s)'; }

  /* #endregion */

  /* #region  private methods */

  private validateProductList(): boolean {
    let isValid = true;

    this.productComponentList.forEach(element => {
      if (!element.isValid()) {
        isValid = false;
        return;
      }
    });

    return isValid;
  }
  /* #endregion */

}
