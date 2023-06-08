// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {ip} from './development.ip';

export const environment = {
  production: true,
  serverUrl: `http://${ip}:8000`,
  apiUrl: `http://${ip}:8000/api`
};
