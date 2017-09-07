class ServiceDetailController {
  constructor($state,Api,$http) {
    'ngInject'
    this.$state = $state
    this.Api = Api
    this.$http = $http
    this.detailEndpoint = Api+'/service/service?id='+$state.params.id
  }
  $onInit() {
    this.getData()
  }
  getData(){
    this.$http.get(this.detailEndpoint).then((results)=>{
      this.item = results.data.data[0]
    })
  }
}

export default ServiceDetailController