class dataEntityController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
  }
  $onInit(){
    this.entity = {
      name:'Entidad 1'
    }
  }
}

export default dataEntityController