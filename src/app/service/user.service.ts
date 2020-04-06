import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { UserAPIName } from '../utils/billing-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiService: ApiService,
    private environmentService: EnvironmentService
  ) { }

  getAllUsers(): Observable<any> {
    return this.apiService.get(this.environmentService.getUrl(UserAPIName.SAVE, 'Save'));
  }

}
