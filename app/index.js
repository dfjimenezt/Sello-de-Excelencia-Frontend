// import 'jquery';
// import 'materialize-css/bin/materialize.css';
// import 'materialize-css/bin/materialize.js';
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngAnimate from 'angular-animate'
import toastr from 'angular-toastr'
import angularMaterialize from 'angular-materialize'
import satellizer from 'satellizer'
import 'angular-toastr/dist/angular-toastr.min.css'

import commonModule from './common'
import componentsModule from './components'
import containersModule from './containers'
import appComponent from './containers/app/app.component'
import appConfig from './containers/app/app.config'

const API = 'https://backend-dot-domoti-sellodeexcelencia.appspot-preview.com/api'

const modules = [
  uiRouter,
  ngAnimate,
  toastr,
  angularMaterialize,
  satellizer,
  commonModule,
  componentsModule,
  containersModule
]

angular
  .module('qualityStamp', modules)
  .constant('Api',API)
  .config(appConfig)
  .component('app',appComponent)
