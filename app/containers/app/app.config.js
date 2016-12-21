const appConfig = ($stateProvider, $urlRouterProvider,$locationProvider) => {
  $stateProvider
    .state('home',{
      url : '/',
      component: 'home'
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

  $locationProvider.hashPrefix('!')
  $urlRouterProvider.otherwise('/')
}

appConfig.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider']

export default appConfig
