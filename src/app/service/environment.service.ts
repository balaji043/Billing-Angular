import { Injectable } from '@angular/core';
import { ENV_LOCAL } from 'src/environments/environment-local';
import { Environment } from '../../environments/environtment-base';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  env = 'local';
  environments: Environment[];
  environment: Environment;
  constructor() {
    this.environments = [
      ENV_LOCAL
    ];
    this.environment = this.environments.find(env => {
      return env.env === this.env;
    });
  }

  public getUrl(msName: string, apiName: string): string {
    const microService = this.environment.msPoints.find(ms => ms.msName === msName);
    return this.environment.dns + this.environment.baseUrl + microService.basePath
      + microService.endPoints.find(endPoint => endPoint.apiName === apiName).path;
  }

}


