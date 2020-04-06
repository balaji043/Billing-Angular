import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/service/customer.service';
import { SharedService } from 'src/app/service/shared.service';
import { BillType, CustomerType } from 'src/app/utils/billing-constants';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  customerForm = this.fb.group(
    {
      name: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      gstNo: [null, Validators.required],
      street: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zipCode: [null, Validators.required],
      customerType: [null, Validators.required]
    }
  );

  constructor(
    public dialogRef: MatDialogRef<CustomerRegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private sharedService: SharedService,
    private uService: UtilityService) {
    this.customerTypeControl.setValue(CustomerType.NON_GST);
  }
  ngOnInit(): void {
    this.customerTypeControl.setValue(CustomerType.NON_GST);
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      this.customerService.saveCustomer(this.customerForm.value).subscribe(result => {
        this.sharedService.openMatSnackBar('Customer ' + result.name + ' saved successfully');
        this.dialogRef.close(true);
      }, error => {
        this.sharedService.openMatSnackBar('Error occured');
      });
    } else {
      this.customerForm.markAllAsTouched();
    }
  }

  onNoClick(): void {
    this.sharedService.openMatSnackBar('Cancelled');
    this.dialogRef.close(false);
  }

  get customerTypeControl() { return this.customerForm.get('customerType'); }

  onGSTToggle() {
    const customerType = this.customerTypeControl.value === CustomerType.GST ? CustomerType.NON_GST : CustomerType.GST;
    this.customerTypeControl.setValue(customerType);
  }
}
