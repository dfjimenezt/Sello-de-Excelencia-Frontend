import { resolveActiveAccount } from '../authentication/helpers.js'

const appConfig = ($stateProvider, $urlRouterProvider,$locationProvider,$authProvider,Api) => {
  $stateProvider
    .state('landingPage',{
      url : '/',
      component: 'landingPage',
      onEnter: function(){
        document.title = 'Sello de Excelencia'
      },
    })
    .state('signIn',{
      url: '/sign-in',
      component: 'signIn',
      onEnter: function(){
        document.title = 'Inicio de Sesión'
      },
    })
    .state('signUp',{
      url: '/sign-up',
      component: 'signUp',
      onEnter: function(){
        document.title = 'Registro'
      },
    })
    .state('forgotPassword',{
      url: '/forgot-password',
      component: 'forgotPassword',
      onEnter: function(){
        document.title = 'Recordar Contraseña'
      },
    })
    .state('changePwd',{
      url: '/cambio-contrasena',
      component: 'changePassword',
      onEnter: function(){
        document.title = 'Cambiar Contraseña'
      },
    })
    .state('activeAccount',{
      url: '/activar-cuenta?token&email',
      component: 'activeAccount',
      params: { email: null, token:null },
      resolve: {
        user: resolveActiveAccount
      },
      onEnter: function(){
        document.title = 'Activación de Cuenta'
      },
    })
    .state('moreInformation',{
      url:'/mas-informacion',
      component:'moreInformation',
      onEnter: function(){
        document.title = 'Más información'
      },
    })
    .state('terms',{
      url: '/terminos-y-condiciones',
      component: 'terms',
      onEnter: function(){
        document.title = 'Términos y Condiciones'
      },
    })
    .state('registerEvaluator',{
      url:'/registro-evaluador',
      component: 'registerEvaluator',
      onEnter: function(){
        document.title = 'Registro de Evaluador'
      },
    })
    .state('registerEntity',{
      url:'/registro-entidad',
      component: 'registerEntity',
      onEnter: function(){
        document.title = 'Registro de Entidad'
      },
    })
    .state('certifiedservices',{
      url: '/certificados',
      component: 'servicelist',
      onEnter: function(){
        document.title = 'Productos y Servicios Certificados'
      },
    })
    .state('detail',{
      url: '/detalle/:id',
      component: 'servicedetail',
      onEnter: function(){
        document.title = 'Detalle de Producto o Servicio'
      },
    })
    .state('entity',{
      url:'/entidad',
      component: 'profileEntity',
      onEnter: function(){
        document.title = 'Entidad - Perfil'
      },
    })
    .state('evaluator',{
      url:'/evaluador',
      component: 'profileEvaluator',
      onEnter: function(){
        document.title = 'Evaluador - Perfil'
      },
    })

  $locationProvider.hashPrefix('!')
  $urlRouterProvider.otherwise('/')

  $authProvider.loginUrl = `${Api}/auth/login`
  $authProvider.signupUrl = `${Api}/auth/register`
  $authProvider.authToken = ''
  $authProvider.tokenName = 'token'
  $authProvider.tokenPrefix = 'qualityStamp'

  $authProvider.facebook({
    clientId: '405189839819599',
    responseType: 'token'
  })
}

resolveActiveAccount.$inject = ['$q','$state','$stateParams','AuthService']
appConfig.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider','$authProvider','Api']

export default appConfig
