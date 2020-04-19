import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { MatSnackBar } from '@angular/material';
import { SharedService } from 'src/app/service/shared.service';
import { UtilityService } from 'src/app/service/utility.service';
import { LoginResponse } from 'src/app/model/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required]
  });
  isLoginFailed: boolean;
  isLoggedIn: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private sharedService: SharedService,
    private utilityService: UtilityService) {
    if (!this.utilityService.isNullOrUndefined(this.tokenStorage.getUser())) {
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.reloadPage();
    }
  }

  ngOnInit(): void {
    this.loginForm.reset();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login(this.loginForm.value).subscribe(
        (loginResponse: LoginResponse) => {
          this.tokenStorage.saveToken(loginResponse.token);
          this.tokenStorage.saveUser(loginResponse);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.sharedService.openMatSnackBar('Welcome ' + loginResponse.user.name + ' !!!');
          this.reloadPage();
        },
        err => {
          this.isLoginFailed = true;
          this.sharedService.openMatSnackBar(err.message);
        }
      );
    }
  }

  reloadPage() {
    this.router.navigateByUrl('');
  }

}
