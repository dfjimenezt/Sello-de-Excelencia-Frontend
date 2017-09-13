import angular from 'angular'
import signInComponent from './signIn/signIn.component'
import signUpComponent from './signUp/signUp.component'
import forgotPasswordComponent from './forgotPassword/forgotPassword.component'
import changePwdComponent from './changePwd/changePwd.component'
import AuthService from './auth.service'
import activeAccountComponent from './activeAccount/activeAccount.component'


const authentication = angular
  .module('qualityStamp.components.authentication',[])
  .component('signIn',signInComponent)
  .component('signUp',signUpComponent)
  .component('changePassword',changePwdComponent)
  .component('forgotPassword',forgotPasswordComponent)
  .component('activeAccount',activeAccountComponent)
  .service('AuthService',AuthService)
  .name

export default authentication
