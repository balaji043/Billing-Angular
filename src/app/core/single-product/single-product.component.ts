import { Component, Input } from '@angular/core';
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
  /* #endregion */

  /* #region  variable declaration */
  singleProductForm = this.fb.group({
    checkBox: [],
    description: [null, Validators.required],
    hsn: [null, Validators.required],
    quantity: [null, Validators.required],
    rate: [null, Validators.required],
    gstPercentage: [null, Validators.required],
    discount: [null]
  });
  gstPercentages: number[];
  descriptions: string[];
  /* #endregion */

  /* #region  constructor */
  constructor(private fb: FormBuilder) {
    /* #region  to be replaced with api calls */
    this.gstPercentages = [16, 18, 21];
    this.descriptions = ['Pen', 'Pencil', 'Eraser', 'Sharpner', 'Scale'];
    /* #endregion */
  }
  /* #endregion */

  /* #region  on event functions */
  onSubmit() {
    console.log(this.product);
  }
  /* #endregion */

}
