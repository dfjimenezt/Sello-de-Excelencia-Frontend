class advanceEntityController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
  }
  $onInit(){
    this.user={
      points:200
    }
  }
}

export default advanceEntityController