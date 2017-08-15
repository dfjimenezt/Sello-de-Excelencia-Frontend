class CategoryListController {
  constructor($state,$window) {
    'ngInject'
    this.$window = $window
    this.$state = $state
  }
  
  $onInit() {
    this.categories = [
      //{id:1, title: '¿Quieres postular tu producto o servicio?', img: 'assets/img/postular.png', stateUrl: 'registerEntity'},
      {id:2, title: '¿Quieres ser parte de la comunidad evaluadora?', img: 'assets/img/comunidad.png', stateUrl: 'https://goo.gl/forms/Ouzw6Ag0IfzLWOdg1'},
      //{id:3, title: 'Conoce y calífica los productos certificados', img: 'assets/img/evaluando.png', stateUrl: 'home'}
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
