class CategoryListController {
  constructor($state) {
    'ngInject'
    this.$state = $state
  }
  
  $onInit() {
    this.categories = [
      {id:1, title: '¿Quieres postular tu producto o servicio?', img: 'assets/img/postular.png', stateUrl: 'signUp'},
      {id:2, title: '¿Quieres ser parte de la comunidad evaluadora?', img: 'assets/img/comunidad.png', stateUrl: 'signUp'},
      {id:3, title: '¿Que se está evualuando?', img: 'assets/img/evaluando.png', stateUrl: 'home'},
      {id:4, title: 'Participe en el foro ciudadano', img: 'assets/img/foro.png', stateUrl: 'home'}
    ]
  }

  goTo(state) {
    this.$state.go(state)
  }
}

export default CategoryListController
