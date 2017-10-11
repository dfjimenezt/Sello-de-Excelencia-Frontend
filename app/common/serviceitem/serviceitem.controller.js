class serviceItemController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.serviceEndpoint = Api+'/service/service_status?limit=1&order=timestamp%20desc&filter_field=id_service&filter_value='
  }
  $onInit(){
    this.$http.get(this.serviceEndpoint+this.item.id).then((results)=>{
      this.item.status = results.data.data[0]
    })
  }
}

export default serviceItemController