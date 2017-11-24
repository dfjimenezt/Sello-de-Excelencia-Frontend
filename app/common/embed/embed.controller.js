class EmbedController {
  constructor($state,Api,$http,$auth) {
    'ngInject'
    this.$state = $state
    this.Api = Api
    this.$http = $http
    if($auth.isAuthenticated()){
      this.disabled = $auth.getPayload().role === 'Evaluador' ||
        $auth.getPayload().role === 'Entidad'
    }else{
      this.disabled = false
    }
  }
  $onInit() {
    
  }
  getData(){
    this.$http.get(this.detailEndpoint).then((results)=>{
      this.item = results.data.data[0]
    })
  }
}

export default EmbedController