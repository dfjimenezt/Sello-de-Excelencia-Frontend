class dataEvaluatorController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
  }
  $onInit(){
    this.entity = {
      name:'Entidad 1'
    }
    this.register={
      categories:[],
      topics:[]
    }
  }
}

export default dataEvaluatorController