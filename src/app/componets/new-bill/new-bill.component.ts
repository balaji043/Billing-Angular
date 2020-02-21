import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {
  products: Product[];
  customerName: string;
  totalAmount: number;

  constructor() {
    this.products = [];
    this.customerName = 'Tony Stark';
    this.totalAmount = 0;
    this.onClickOfAddProductButton();
  }

  ngOnInit() { }

  public onClickOfAddProductButton() {
    this.products.push(this.getNewInitializedProduct());
  }

  public onClickOfOverallDeleteButton() {
    this.products = this.products.filter(
      product => !product.isSelected
    );
  }

  public onClickOfIndividualDeleteButton(productToBeDeleted: Product) {
    this.products = this.products.filter(
      product => product !== productToBeDeleted
    );
  }

  private getNewInitializedProduct(): Product {
    const product = new Product();
    product.description = '';
    product.discount = 0;
    product.gstPercentage = 0;
    product.hsn = '';
    product.quantity = 0;
    product.rate = 0;
    product.isSelected = false;
    return product;
  }

  private onSubmit(): void {
    console.log(this.products);
  }
}
