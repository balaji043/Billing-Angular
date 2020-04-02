import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './app-main-nav.component.html',
  styleUrls: ['./app-main-nav.component.css']
})
export class AppMainNavComponent {

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('/login');
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  get isLoggedIn() {
    return !!this.tokenStorageService.getToken();
  }

}
