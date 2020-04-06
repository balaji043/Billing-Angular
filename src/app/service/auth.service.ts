import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { EnvironmentService } from './environment.service';
import { AuthAPIName } from '../utils/billing-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private environmentService: EnvironmentService) { }

  public login(credentials): Observable<any> {
    return this.apiService.post(
      this.environmentService.getUrl(AuthAPIName.SIGN_IN, 'SignIn'),
      credentials);
  }


}

