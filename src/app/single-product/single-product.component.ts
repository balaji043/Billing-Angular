import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  @Input() product: Product;

  singleProductForm = this.fb.group({
    description: [null, Validators.required],
    hsn: [null, Validators.required],
    quantity: [null, Validators.required],
    rate: [null, Validators.required],
    gstPercentage: [null, Validators.required],
    discount: [null]
  });

  gstPercentages = [
    16, 18, 21
  ];
  slNo = 1;

  constructor(private fb: FormBuilder) {
    console.log(this.product);
   }

  onSubmit() {
  }
}
