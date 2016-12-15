class CategoryListController {
  constructor($state,$window) {
    'ngInject'
    this.$window = $window
    this.$state = $state
  }
  
  $onInit() {
    this.categories = [
      {id:1, title: '¿Quieres postular tu producto o servicio?', img: 'assets/img/postular.png', stateUrl: 'https://docs.google.com/a/domoti-sas.com/forms/d/e/1FAIpQLScPGcrNFdd3uXgFxy6hhICsSyGo2oYfGCvU7Mtf33qsXmAAOA/viewform?c=0&w=1'},
      {id:2, title: '¿Quieres ser parte de la comunidad evaluadora?', img: 'assets/img/comunidad.png', stateUrl: 'signUp'},
      {id:3, title: '¿Que se está evualuando?', img: 'assets/img/evaluando.png', stateUrl: 'home'},
      {id:4, title: 'Participe en el foro ciudadano', img: 'assets/img/foro.png', stateUrl: 'home'}
    ]
  }

  goTo(state) {
    if (state.includes('http')) {
      this.$window.location.href = state
    } else {
      this.$state.go(state)
    }
  }
}

export default CategoryListController
