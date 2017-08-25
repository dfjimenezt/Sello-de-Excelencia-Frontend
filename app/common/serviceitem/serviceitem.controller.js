class serviceItemController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
  }
  $onInit(){
    console.log(this)
  }
}

export default serviceItemController