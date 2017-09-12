class CategoryListController {
  constructor($state,$window,$auth) {
    'ngInject'
    this.$window = $window
    this.$auth = $auth
    this.$state = $state
  }
  
  $onInit() {
    this.categories = [
      {
        id:1, 
        title: '¿Quieres postular tu producto o servicio?', 
        img: 'assets/img/postular.png', 
        stateUrl: 'registerEntity',
        entityState: 'entity',
        evaluatorState: 'evaluator'
      },
      {
        id:2, 
        title: '¿Quieres ser parte de la comunidad evaluadora?', 
        img: 'assets/img/comunidad.png', 
        stateUrl: 'registerEvaluator',
        entityState: 'entity',
        evaluatorState: 'evaluator'
      },
      {
        id:3, 
        title: 'Conoce y califica los productos certificados', 
        img: 'assets/img/evaluando.png', 
        stateUrl: 'certifiedservices',
        entityState: 'certifiedservices',
        evaluatorState: 'certifiedservices'
      }
    ]
  }

  goTo(category) {
    let state = category.stateUrl
    if(this.$auth.isAuthenticated()){
      if(this.$auth.getPayload().role == 'Entidad'){
        state = category.entityState
      }
      if(this.$auth.getPayload().role == 'Evaluador'){
        state = category.evaluatorState
      }
    }
    
    if (state.includes('http')) {
      this.$window.location.href = state
    } else {
      this.$state.go(state)
    }
  }
}

export default CategoryListController
