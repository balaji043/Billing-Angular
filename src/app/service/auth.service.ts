import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private environmentService: EnvironmentService) { }

  login(credentials): Observable<any> {
    return this.apiService.post(this.environmentService.getUrl('API-AUTH', 'SignIn'),
      credentials
    );
  }


}
