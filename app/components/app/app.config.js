import { resolveActiveAccount } from '../authentication/helpers.js'

const appConfig = ($stateProvider, $urlRouterProvider,$locationProvider,$authProvider,Api) => {
  $stateProvider
    .state('landingPage',{
      url : '/',
      component: 'landingPage'
    })
    .state('signIn',{
      url: '/sign-in',
      component: 'signIn'
    })
    .state('signUp',{
      url: '/sign-up',
      component: 'signUp'
    })
    .state('forgotPassword',{
      url: '/forgot-password',
      component: 'forgotPassword'
    })
    .state('activeAccount',{
      url: '/activar-cuenta?token&email',
      component: 'activeAccount',
      params: { email: null, token:null },
      resolve: {
        user: resolveActiveAccount
      }
    })
    .state('moreInformation',{
      url:'/mas-informacion',
      component:'moreInformation'
    })
    .state('terms',{
      url: '/terminos-y-condiciones',
      component: 'terms'
    })
    .state('registerEvaluator',{
      url:'/registro-evaluador',
      component: 'registerEvaluator'
    })
    .state('registerEntity',{
      url:'/registro-entidad',
      component: 'registerEntity'
    })
    .state('certifiedservices',{
      url: '/certificados',
      component: 'servicelist'
    })
    .state('detail',{
      url: '/detalle/:id',
      component: 'servicedetail'
    })
    .state('entity',{
      url:'/entidad',
      component: 'profileEntity'
    })
    .state('evaluator',{
      url:'/evaluador',
      component: 'profileEvaluator'
    })

  $locationProvider.hashPrefix('!')
  $urlRouterProvider.otherwise('/')

  $authProvider.loginUrl = `${Api}/auth/login`
  $authProvider.signupUrl = `${Api}/auth/register`
  $authProvider.authToken = ''
  $authProvider.tokenName = 'token'
  $authProvider.tokenPrefix = 'qualityStamp'
}

resolveActiveAccount.$inject = ['$q','$state','$stateParams','AuthService']
appConfig.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider','$authProvider','Api']

export default appConfig
