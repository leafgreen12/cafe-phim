/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAwBHuUl1uKusikMB9hGJZ74lBa6RTMbcU',
    authDomain: 'cafe-clone.firebaseapp.com',
    databaseURL: 'https://cafe-clone.firebaseio.com',
    projectId: 'cafe-clone',
    storageBucket: 'cafe-clone.appspot.com',
    messagingSenderId: '838585538343',
    appId: '1:838585538343:web:f75df87e732d986e857b02',
    measurementId: 'G-NVR3R6T89Y',
  },
};
