import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { UserAPIName, MSName } from '../utils/billing-constants';
import { UserSearchRequest } from '../model/user-search-request';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private apiService: ApiService,
    private environmentService: EnvironmentService
  ) { }

  public saveUser(user: User) {
    return this.apiService.post(this.getUrl(UserAPIName.SAVE), user);
  }
  public getAllUsers(userRequest: UserSearchRequest): Observable<any> {
    return this.apiService.post(this.getUrl(UserAPIName.SEARCH), userRequest);
  }

  public getUrl(apiName: string): string {
    return this.environmentService.getUrl(MSName.USER_MS, apiName);
  }
}
