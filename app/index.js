// import 'jquery';
// import 'materialize-css/bin/materialize.css';
// import 'materialize-css/bin/materialize.js';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import commonModule from './common';
import containersModule from './containers';
import appComponent from './containers/app/app.component';
import appConfig from './containers/app/app.config';

const modules = [uiRouter,commonModule, containersModule]

angular
  .module('qualityStamp', modules)
  .config(appConfig)
  .component('app',appComponent)
