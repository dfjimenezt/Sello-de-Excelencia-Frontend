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


const API = 'https://backend-test-dot-domoti-sellodeexcelencia.appspot.com/api'
//const API = 'http://localhost:3000/api'
const STATES = {
  SERVICE: {
		'INCOMPLETO': 1, //EN DILIGENCIAMIENTO POR LA ENTIDAD
		'VERIFICACION': 2,  //EN VERIFICACIÓN POR EL ADMON
		'EVALUACION': 3, //EN PROCESO DE EVALUACIÓN
		'CUMPLE': 4, // CUMPLE
		'NO_CUMPLE': 5 // NO CUMPLE
	},
	EVALUATION_REQUEST: {
		'PENDIENTE': 1, //EN DILIGENCIAMIENTO POR LA ENTIDAD
		'ERROR': 2, //HAS ERROR
		'SOLICITADO': 3, //SOLICITADO VOLUNTARIAMENTE
		'ASIGNADO': 4, //ASIGNADO POR LA PLATAFORMA
		'ACEPTADO': 5, //ACEPTADO POR EL EVALUADOR
		'RECHAZADO': 6, //RECHAZADO POR EL EVALUADOR
		'RETROALIMENTACION': 7, //EN RETROALIMENTACIÓN
		'CUMPLE': 8, //CUMPLE
		'NO_CUMPLE': 9 //NO_CUMPLE
	}
}
/**
 * SERVICE: {
		'VERIFICACION': 1,
		'ASIGNACION': 2,
		'ACEPTACION': 3,
		'RETIRADO': 4,
		'EVALUACION': 5,
		'RETROALIMENTACION': 6,
		'CIERRE': 7,
		'CUMPLE': 8,
		'NO_CUMPLE': 9,
		'INCOMPLETO': 10,
		'RECHAZADO': 11,
	},
 */
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
  .constant('STATES',STATES)
  .config(appConfig)
  .component('app',appComponent)
