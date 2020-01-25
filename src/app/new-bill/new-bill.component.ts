import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = [];
    this.products.push(this.getNewInitializeProduct());
  }

  ngOnInit() {
  }

  private getNewInitializeProduct(): Product{
    const product = new Product();
    product.description = '';
    product.discount = 0;
    product.gstPercentage = 0;
    product.hsn = '';
    product.quantity = 0;
    product.rate = 0;
    return product;
  }
}
