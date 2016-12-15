const appConfig = ($stateProvider, $urlRouterProvider) => {
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

  $urlRouterProvider.otherwise('/')
}

appConfig.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider']

export default appConfig
