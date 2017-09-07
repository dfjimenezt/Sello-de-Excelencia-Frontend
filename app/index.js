import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngAnimate from 'angular-animate'
import toastr from 'angular-toastr'
import ngFileUpload from 'ng-file-upload'
import angularMaterialize from 'angular-materialize'
import satellizer from 'satellizer'
import 'angular-toastr/dist/angular-toastr.min.css'

import commonModule from './common'
import componentsModule from './components'
import appComponent from './components/app/app.component'
import appConfig from './components/app/app.config'


const API = 'https://backend-dot-domoti-sellodeexcelencia.appspot.com/api'
//const API = 'http://localhost:3000/api'

const modules = [
  uiRouter,
  ngAnimate,
  toastr,
  angularMaterialize,
  satellizer,
  ngFileUpload,
  commonModule,
  componentsModule
]

angular
  .module('qualityStamp', modules)
  .constant('Api',API)
  .config(appConfig)
  .component('app',appComponent)
