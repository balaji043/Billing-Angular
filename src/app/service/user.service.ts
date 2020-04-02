import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiService: ApiService,
    private environmentService: EnvironmentService
  ) { }

  getAllUsers(): Observable<any> {
    return this.apiService.get(this.environmentService.getUrl('User-MS', 'Save'));
  }

}
