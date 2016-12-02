const appConfig = ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
    .state('home',{
      url : '/',
      component: 'home'
    })

  $urlRouterProvider.otherwise('/')
  $locationProvider.html5Mode(true)
}

appConfig.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider']

export default appConfig
