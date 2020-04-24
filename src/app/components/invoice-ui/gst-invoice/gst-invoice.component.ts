import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-gst-invoice',
  templateUrl: './gst-invoice.component.html',
  styleUrls: ['./gst-invoice.component.css']
})
export class GstInvoiceComponent implements OnInit {

  bill: Bill;
  store: StoreDetails;
  constructor() {
    this.bill = {
      invoice: 'invoice',
      date: '04/03/1997',
      totalAmount: '123123',
      customerName: {
        name: 'Customer Name',
        city: 'City',
        gstIn: '123456789123456',
        phone: '9751776701',
        state: 'Tamil Nadu',
        streetAddress: 'street address',
        zipCode: '621212'
      },
      gst12Half: '123',
      gst12Total: '123',
      gst18Half: '123',
      gst18Total: '123',
      gst28Half: '123',
      gst28Total: '123',
      totalTaxAmount: '1',
      halfTax: '123',
      gross: '123',
      time: '123',
      localDate: '12/12/1221',
      totalAmountBeforeRoundOff: '123',
      total: '12',
      roundedOff: '00.13',
      place: '12',
      tax12BeforeTotal: '12',
      tax18BeforeTotal: '12',
      tax28BeforeTotal: '12',
      userName: 'user name',
      products: [
        {
          name: '13',
          gstAmount: '123',
          halfTaxAmt: '123',
          halfTaxPer: '132',
          hsn: '12',
          per: '123',
          qty: '123',
          rate: '123',
          ready: '123',
          singleOrg: '123',
          sl: '123',
          tax: '123',
          totalAmount: '123',
          totalOriginalAmount: '123',
        }
      ]
    } as Bill;
    this.store = {
      city: 'trichy',
      gstIn: '789456123456456',
      name: 'Nma Stores',
      phoneNumber: '123456789',
      street: 'muthu nagar',
      icon: 'icon',
      description: 'House Of Cards'
    } as StoreDetails;
  }

  ngOnInit() {
  }

}

class StoreDetails {
  description: string;
  name: string;
  street: string;
  city: string;
  phoneNumber: string;
  gstIn: string;
  icon: string;
}

class Bill {
  invoice: string;
  date: string;
  customerName: Customer;
  products: Product[];
  totalAmount: string;
  gst12Half: string;
  gst12Total: string;
  gst18Half: string;
  gst18Total: string;
  gst28Half: string;
  gst28Total: string;
  totalTaxAmount: string;
  halfTax: string;
  gross: string;
  userName: string;
  time: string;
  localDate: string;
  totalAmountBeforeRoundOff: string;
  total: string;
  roundedOff: string;
  place: string;
  tax12BeforeTotal: string;
  tax18BeforeTotal: string;
  tax28BeforeTotal: string;
}

class Product {
  sl: string;
  name: string;
  hsn: string;
  qty: string;
  tax: string;
  rate: string;
  per: string;
  halfTaxPer: string;
  halfTaxAmt: string;
  totalAmount: string;
  singleOrg: string;
  gstAmount: string;
  ready: string;
  totalOriginalAmount: string;
}
