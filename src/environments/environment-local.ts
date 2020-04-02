// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment, MicroService, EndPoint } from 'src/environments/environtment-base';


export const ENV_LOCAL = new Environment(
  'local',
  'http://localhost:8080',
  '/bs/bam',
  false,
  [
    new MicroService('Bill-MS', '/bill',
      [
        new EndPoint('Save', ''),
        new EndPoint('Update', ''),
        new EndPoint('Search', ''),
        new EndPoint('Delete', '')
      ]),
    new MicroService('Customer-MS', '/customer',
      [
        new EndPoint('Save', ''),
        new EndPoint('Update', ''),
        new EndPoint('Search', ''),
        new EndPoint('Delete', '')
      ]),
    new MicroService('User-MS', '/user',
      [
        new EndPoint('Save', ''),
        new EndPoint('Update', ''),
        new EndPoint('Search', ''),
        new EndPoint('Delete', ''),
      ]),
    new MicroService('API-AUTH', '/api/auth',
      [
        new EndPoint('SignIn', '/signin')
      ])
  ]
);
