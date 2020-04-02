import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {

  customer: Customer;
  customerForm = this.fb.group(
    {
      name: [null, Validators.required],
      phone: [null],
      gstIn: [null],
      streetAddress: [null],
      city: [null],
      state: [null],
      zipCode: [null]
    }
  );

  constructor(public dialogRef: MatDialogRef<CustomerRegistrationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) {
    this.customer = new Customer();
  }

  onSubmit(): void {
    this.dialogRef.close(true);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
