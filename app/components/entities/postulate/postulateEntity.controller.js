class postulateEntityController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
  }
  $onInit(){
    this.entity = {
      name:'Entidad 1'
    }
    this.requisites = [
      {
        criteria:'Esto es el criterio',
        help:'Ayuda',
        description:'Criterio 1',
        legal:'Este es el sustento legal',
        evidence:'Por favor suba esta evidencia'
      }
    ]
  }
}

export default postulateEntityController