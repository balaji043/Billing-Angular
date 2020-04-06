// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment, MicroService, EndPoint } from 'src/environments/environtment-base';
import { BillAPIName, CustomerAPIName, UserAPIName, AuthAPIName, MSName } from 'src/app/utils/billing-constants';

export const ENV_LOCAL = new Environment(
  'local',
  'http://localhost:8080',
  '/bs/bam',
  false,
  [
    new MicroService(MSName.BILL_MS, '/bill',
      [
        new EndPoint(BillAPIName.SAVE, ''),
        new EndPoint(BillAPIName.UPDATE, ''),
        new EndPoint(BillAPIName.SEARCH, '/search'),
        new EndPoint(BillAPIName.DELETE, '')
      ]),
    new MicroService(MSName.CUSTOMER_MS, '/customer',
      [
        new EndPoint(CustomerAPIName.SAVE, ''),
        new EndPoint(CustomerAPIName.UPDATE, ''),
        new EndPoint(CustomerAPIName.SEARCH, '/search'),
        new EndPoint(CustomerAPIName.FUZZY, '/fuzzy'),
        new EndPoint(CustomerAPIName.DELETE, '')
      ]),
    new MicroService(MSName.USER_MS, '/user',
      [
        new EndPoint(UserAPIName.SAVE, ''),
        new EndPoint(UserAPIName.UPDATE, ''),
        new EndPoint(UserAPIName.SEARCH, '/search'),
        new EndPoint(UserAPIName.DELETE, '')
      ]),
    new MicroService(MSName.API_AUTH, '/api/auth',
      [
        new EndPoint(AuthAPIName.SIGN_IN, '/signin')
      ])
  ]
);
