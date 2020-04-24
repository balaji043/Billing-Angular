import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerRegistrationComponent } from '../customer-registration/customer-registration.component';
import { UserService } from 'src/app/service/user.service';
import { SharedService } from 'src/app/service/shared.service';
import { UserRole } from 'src/app/utils/billing-constants';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm = this.fb.group(
    {
      name: [null, Validators.required],
      userName: [null, Validators.required],
      role: [null, Validators.required],
      password: [null, Validators.required]
    }
  );
  public UserRole = UserRole;

  constructor(
    public dialogRef: MatDialogRef<CustomerRegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private userService: UserService,
    private sharedService: SharedService
  ) {
    this.userRoleControl.setValue(UserRole.EMPLOYEE);
  }

  ngOnInit() {
    this.userRoleControl.setValue(UserRole.EMPLOYEE);
  }

  get userRoleControl() { return this.userForm.get('role'); }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.saveUser(this.userForm.value).subscribe(result => {
        this.sharedService.openMatSnackBar(result.message);
        this.dialogRef.close(true);
      }, error => {
        this.sharedService.openMatSnackBar('Error occured');
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  onNoClick(): void {
    this.sharedService.openMatSnackBar('Cancelled');
    this.dialogRef.close(false);
  }

  get customerTypeControl() { return this.userForm.get('customerType'); }

  onRoleToggle() {
    const customerType = this.customerTypeControl.value === UserRole.ADMIN ? UserRole.EMPLOYEE : UserRole.ADMIN;
    this.customerTypeControl.setValue(customerType);
  }
}
