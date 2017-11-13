class serviceItemController{
  constructor(Api,$http,STATES){
    'ngInject'
    this.Api = Api
    this.STATES = STATES
    this.$http = $http
    this.serviceEndpoint = Api+'/service/service_status?limit=1&order=timestamp%20desc&filter_field=id_service&filter_value='
  }
  $onInit(){
    this.$http.get(this.serviceEndpoint+this.item.id).then((results)=>{
      this.item.status = results.data.data[0]
      if(this.item.status.timestamp.indexOf('T') >-1 ){
        this.item.status.timestamp = this.item.status.timestamp.split('T')[0]
      }
      if(this.item.status.valid_to.indexOf('T') >-1 ){
        this.item.status.valid_to = this.item.status.valid_to.split('T')[0]
      }
      if(this.item.url.indexOf('http') !== 0){
        this.item.url = 'http://'+this.item.url
      }
    })
  }
}

export default serviceItemController