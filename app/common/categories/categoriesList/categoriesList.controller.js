class CategoryListController {
  $onInit() {
    this.categories = [
      {id:1, title: '¿Quieres postular tu producto o servicio?', img: 'assets/img/postular.png'},
      {id:2, title: '¿Quieres ser parte de la comunidad evaluadora?', img: 'assets/img/comunidad.png'},
      {id:3, title: '¿Que se está evualuando?', img: 'assets/img/evaluando.png'},
      {id:4, title: 'Participe en el foro ciudadano', img: 'assets/img/foro.png'}
    ]
  }
}

export default CategoryListController
