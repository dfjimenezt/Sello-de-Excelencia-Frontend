import angular from 'angular'
import signInComponent from './signIn/signIn.component'
import signUpComponent from './signUp/signUp.component'
import forgotPasswordComponent from './forgotPassword/forgotPassword.component'
import AuthService from './auth.service'


const authentication = angular
  .module('qualityStamp.components.authentication',[])
  .component('signIn',signInComponent)
  .component('signUp',signUpComponent)
  .component('forgotPassword',forgotPasswordComponent)
  .service('AuthService',AuthService)
  .name

export default authentication
