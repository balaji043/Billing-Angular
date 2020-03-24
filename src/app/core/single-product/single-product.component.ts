import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  /* #region  component inputs */
  @Input() product: Product;
  @Input() slNo: number;
  @Output() deleteFunction = new EventEmitter();
  /* #endregion */

  /* #region  variable declaration */
  singleProductForm = this.fb.group({
    checkBox: [],
    description: [null, Validators.required],
    hsnCode: [null, Validators.required],
    quantity: [null, Validators.required],
    rate: [null, Validators.required],
    taxPercentage: [null, Validators.required],
    perValue: [null, Validators.required],
    discount: [null]
  });
  taxPercentages: number[];
  descriptions: string[];
  perValues: string[];
  /* #endregion */

  /* #region  constructor */
  constructor(private fb: FormBuilder) {
    /* #region  to be replaced with api calls */
    this.taxPercentages = [16, 18, 21];
    this.descriptions = ['Pen', 'Pencil', 'Eraser', 'Sharpner', 'Scale'];
    this.perValues = ['PCS', 'DOZ', 'PKT', 'GRO', 'BOX', 'SET', 'ROL', 'BUN'];
    /* #endregion */
  }
  /* #endregion */

  /* #region  on event functions */
  onSubmit(): void {
    console.log(this.product);
  }

  onClickOfDelete(): void {
    this.deleteFunction.emit(this.product);
  }

  onClickOfReset(): void {
    this.singleProductForm.reset();
  }

  isValid(): boolean {
    this.singleProductForm.markAllAsTouched();
    return this.singleProductForm.valid;
  }
  /* #endregion */

}
