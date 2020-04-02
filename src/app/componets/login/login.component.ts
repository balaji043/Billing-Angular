import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { MatSnackBar } from '@angular/material';

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
    private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loginForm.reset();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login(this.loginForm.value).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigateByUrl('');
        },
        err => {
          this.isLoginFailed = true;
          this.snackBar.open(err.message, 'action', {
            duration: 2000,
          });
        }
      );
    }
  }

  reloadPage() {
    window.location.reload();
  }

}
