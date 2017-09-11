class advanceEntityController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.pointsEndpoint = Api +'/configuration/points'
    this.motivesEndpoint = Api +'/configuration/motives'
  }
  $onInit(){
    this.$http.get(this.pointsEndpoint+'?sumarized=true').then((results)=>{
      let _total = 0
      this.requisites = 0
      this.live = 0
      this.events = 0
      results.data.forEach(function(points) {
        _total += points.value
        if(points.id_motive === 1){
          this.requisites = points.value
        }
        if(points.id_motive === 2){
          this.live = points.value
        }
        if(points.id_motive === 3){
          this.events = points.value
        }
      }, this)
      this.total = _total
    })
    this.$http.get(this.motivesEndpoint).then((results)=>{
      this.motives = results.data.data
    })
    this.$http.get(this.pointsEndpoint+'?filter_field=value&filter_value=<0').then((results)=>{
      this.negatives = results.data.data
    })
  }
}

export default advanceEntityController